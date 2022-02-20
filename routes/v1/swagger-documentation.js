// Auto Indent code shortcut -> Shift + Alt + F     ...thank me later :)

/**
 * @swagger
 * /login:
 *  post:
 *    tags:
 *     - Authentication
 *    summary: Logs in a user and return JWT
 *    description: Use to login a user and responds with a JSON Web Token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *            example:
 *              username: adibak28
 *              password: abc
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    token:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZGliYWsyOCAgIi
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *               example:
 *                 code: BAD_REQUEST
 *      '404':
 *         description: User not found.
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: NOT_FOUND
 *                data:
 *                  message: No such user exist
 *      '500':
 *         description: Internal server error.
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                    message:
 *                      type: string
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: SequelizeDatabaseError
 *                  message: Conversion failed when converting date and/or time from character string.
 */

/**
 * @swagger
 * /token/logout:
 *  get:
 *    tags:
 *     - Authentication
 *    summary: Logs out the currently logged in user
 *    description: Logs out the currently logged in user (by destroying session). Valid JWT is required in header for this API
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  message: Successfully logged out !
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *               example:
 *                 code: BAD_REQUEST
 *                 data:
 *                   message: Bad JWT data (id does not exist)
 *      '500':
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: string
 *                 error:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     message:
 *                       type: string
 *               example:
 *                 code: SERVER_ERROR
 *                 error:
 *                   name: ReferenceError
 *                   message: error is not defined
 */

