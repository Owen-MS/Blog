# cookie、session、token
- HTTP 是无状态的，为了维持前后请求，需要前端存储标记
- cookie 是一种完善的标记方式，通过 HTTP 头或 js 操作，有对应的安全策略，是大多数状态管理方案的基石
- session 是一种状态管理方案，前端通过 cookie 存储 id，后端存储数据，但后端要处理分布式问题token 是另一种状态管理方案，相比于 session 不需要后端存储，数据全部存在前端，解放后端，释放灵活性
- token 的编码技术，通常基于 base64，或增加加密算法防篡改，jwt 是一种成熟的编码方案
- 在复杂系统中，token 可通过 service token、refresh token 的分权，同时满足安全性和用户体验
- session 和 token 的对比就是「用不用cookie」和「后端存不存」的对比
- 单点登录要求不同域下的系统「一次登录，全线通用」，通常由独立的 SSO 系统记录登录状态、下发 ticket，各业务系统配合存储和认证 ticket
