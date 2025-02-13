/**
 * notice controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::notice.notice'
    // ,({ strapi }) =>  ({
        // async create(ctx) {
        //     const { data } = ctx.request.body;
        //     data.admin_user = ctx.state.user.id; // 현재 인증된 관리자 자동 할당
        //     return await super.create(ctx);
        // }
    // })
);
