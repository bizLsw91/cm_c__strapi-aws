/**
 * notice controller
 */
import { factories } from '@strapi/strapi'
export default factories.createCoreController('api::notice.notice'
    ,({ strapi }) =>  ({
        async find(ctx) {
            // 1. 쿼리 파라미터 파싱
            const { isRecruit } = ctx.query

            // 2. 카테고리 필터링 조건 생성
            const slugPrefix = 'recruit'
            const recruitCategories = await strapi.entityService.findMany(
                'api::category.category',
                {
                    filters: {
                        slug: { $startsWith: slugPrefix }
                    },
                    fields: ['name']
                }
            )

            // 3. 카테고리 이름 목록 추출
            const recruitCateNameList = recruitCategories.map(c => c.name)

            // 4. 공지사항 필터링 조회
            const sanitizedQuery = await this.sanitizeQuery(ctx);
            const baseFilters = sanitizedQuery.filters as Record<string, unknown> | {};

            const categoryFilter = isRecruit==='false' ?
                {
                    $or: [
                        {category: {$null:true}},
                        {category: {$notIn: recruitCateNameList }}
                    ]
                }
                : (isRecruit==='true' ?
                    {category:{ $in: recruitCateNameList }}
                     : {})
            const expandedQuery = {
                ...sanitizedQuery,
                filters: {
                    ...baseFilters,
                    ...categoryFilter
                }
            }

            const { results, pagination } = await strapi.service('api::notice.notice').find(expandedQuery)

            // 5. 응답 데이터 변환
            const sanitizedResults = await this.sanitizeOutput(results, ctx)
            return this.transformResponse(sanitizedResults, { pagination })
        }
    })
);
