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

/**
 * @swagger
 * /admin/users:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Returns all users under the given adminId
 *    description: Use to fetch all users under the admin with admin Id = userId passed as path param
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      firstName:
 *                        type: string
 *                      lastName:
 *                        type: string
 *                      username:
 *                        type: string
 *                      email:
 *                        type: string
 *                      mobile:
 *                        type: string
 *                      password:
 *                        type: string
 *                      userType:
 *                        type: string
 *                      adminId:
 *                        type: string
 *                      teamId:
 *                        type: string
 *                      roleId:
 *                        type: string
 *                      status:
 *                        type: string
 *                      activeFlag:
 *                        type: string
 *                      createdAt:
 *                        type: string
 *                      updatedAt:
 *                        type: string
 *                      clearingAccountDetails:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            clearingAccountId:
 *                              type: integer
 *                            clearingAccountName:
 *                              type: string
 *                            exchange:
 *                              type: string
 *                      tradingAccountDetails:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            tradingAccountId:
 *                              type: integer
 *                            accountName:
 *                              type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  id: 3
 *                  firstName: Kushal
 *                  lastName: Garg
 *                  username: kushgar5
 *                  email: kushal.garg@gulaq.com
 *                  mobile: 987654321
 *                  password: $2a$10$gDnQsfl5M5m8kotlM9nNmeRr9DXlRo17MWFNa3/
 *                  userType: userType
 *                  adminId: 2
 *                  teamId: 1
 *                  roleId: 1
 *                  status: active
 *                  activeFlag: true
 *                  createdAt: null
 *                  updatedAt: null
 *                  clearingAccountDetails:
 *                     - clearingAccountId: 1
 *                       clearingAccountName: ca1
 *                       exchange: NSE
 *                  tradingAccountDetails:
 *                     - tradingAccountId: 3
 *                       accountName: ta3
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/clearingAccounts:
 *  get:
 *    tags:
 *     - Admin
 *    summary: does Something related to clearing
 *    description: does Something related to clearing
 *    responses:
 *      '200':
 *        description: successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      name:
 *                        type: string
 *                      exchange:
 *                        type: string
 *                      pan:
 *                        type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                   - id: 1
 *                     name: ca1
 *                     exchange: NSE
 *                     pan: AKXPB2638X
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/roles:
 *  get:
 *    tags:
 *     - Admin Roles
 *    summary: Does Something related to roles
 *    description: something related to roles
 *    responses:
 *      '200':
 *        description: successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      roleName:
 *                        type: string
 *                      description:
 *                        type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                   - id: 1
 *                     roleName: developer
 *                     description: These ppl are expected to develop cool stuff
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/teams:
 *  get:
 *    tags:
 *     - Admin Teams
 *    summary: Fetch team name
 *    description: team name
 *    responses:
 *      '200':
 *        description: successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                      teamName:
 *                        type: string
 *                      description:
 *                        type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                   - id: 1
 *                     teamName: t1
 *                     description: This is Team 1
 *                   - id: 2
 *                     teamName: t2
 *                     description: This is Team 2
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *              example:
 *                code: SERVER_ERROR
 */

/**
 * @swagger
 * /admin/clearingAccounts:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Return CA having atleast 1 available TA for admin
 *    description: Return CA having atleast 1 available TA for admin
 *    responses:
 *      '200':
 *        description: successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      name:
 *                        type: string
 *                      exchange:
 *                        type: string
 *                      pan:
 *                        type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                   - id: 1
 *                     name: ca1
 *                     exchange: NSE
 *                     pan: AKXPB2638X
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/tradingAccounts:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Return available TA for all CA for admin
 *    description: Return available TA for all CA for admin
 *    responses:
 *      '200':
 *        description: successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: integer
 *                      name:
 *                        type: string
 *                      clearingAccountId:
 *                        type: integer
 *              example:
 *                code: SUCCESS
 *                data:
 *                   - id: 1
 *                     name: ta1
 *                     clearingAccountId: 2
 *                   - id: 2
 *                     name: ta2
 *                     clearingAccountId: 1
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/user/{userId}:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Returns all users under the given adminId
 *    description: Use to fetch all users under the admin with admin Id = userId passed as path param
 *    parameters:
 *     - name: userId
 *       in: path
 *       required: true
 *       description: Numeric ID of the admin to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: object
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 *                      firstName:
 *                        type: string
 *                      lastName:
 *                        type: string
 *                      username:
 *                        type: string
 *                      email:
 *                        type: string
 *                      mobile:
 *                        type: string
 *                      password:
 *                        type: string
 *                      userType:
 *                        type: string
 *                      adminId:
 *                        type: string
 *                      teamId:
 *                        type: string
 *                      roleId:
 *                        type: string
 *                      status:
 *                        type: string
 *                      activeFlag:
 *                        type: string
 *                      createdAt:
 *                        type: string
 *                      updatedAt:
 *                        type: string
 *                      clearingAccountDetails:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            clearingAccountId:
 *                              type: integer
 *                            clearingAccountName:
 *                              type: string
 *                            exchange:
 *                              type: string
 *                      tradingAccountDetails:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            tradingAccountId:
 *                              type: integer
 *                            accountName:
 *                              type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  id: 3
 *                  firstName: Kushal
 *                  lastName: Garg
 *                  username: kushgar5
 *                  email: kushal.garg@gulaq.com
 *                  mobile: 987654321
 *                  password: $2a$10$gDnQsfl5M5m8kotlM9nNmeRr9DXlRo17MWFNa3/
 *                  userType: userType
 *                  adminId: 2
 *                  teamId: 1
 *                  roleId: 1
 *                  status: active
 *                  activeFlag: true
 *                  createdAt: null
 *                  updatedAt: null
 *                  clearingAccountDetails:
 *                     - clearingAccountId: 1
 *                       clearingAccountName: ca1
 *                       exchange: NSE
 *                  tradingAccountDetails:
 *                     - tradingAccountId: 3
 *                       accountName: ta3
 *      '404':
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: NOT_FOUND
 *                error:
 *                  message: error is not defined
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /user/details:
 *  get:
 *    tags:
 *     - User
 *    summary: Returns all the details for currently logged in user
 *    description: Returns all the details for currently logged in user
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                data:
 *                  type: object
 *                  items:
 *                    type: object
 *                    properties:
 *                      firstName:
 *                        type: string
 *                      lastName:
 *                        type: string
 *                      username:
 *                        type: string
 *                      email:
 *                        type: string
 *                      mobile:
 *                        type: string
 *                      userType:
 *                        type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  firstName: Kushal
 *                  lastName: Garg
 *                  username: kushgar5
 *                  email: kushal.garg@gulaq.com
 *                  mobile: 987654321
 *                  userType: userType
 *      '404':
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: NOT_FOUND
 *                error:
 *                  message: error is not defined
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /adminterminal/usermaintenance/createUser:
 *  post:
 *    tags:
 *     - User Management
 *    summary: Creates a user
 *    description: creates a user
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
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              mobile:
 *                type: string
 *              roleId:
 *                type: integer
 *              email:
 *                type: string
 *              clearingAccountDetails:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    clearingAccountId:
 *                      type: string
 *                    clearingAccountName:
 *                      type: string
 *                    exchange:
 *                      type: string
 *              tradingAccountDetails:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    tradingAccountId:
 *                      type: string
 *                    accountName:
 *                      type: string
 *            example:
 *              username: akshrei08
 *              password: qwe
 *              firstName: Akshay
 *              lastName: Rein
 *              mobile: 987654321
 *              roleId: developer
 *              email: akshay.rein@gulaq.com
 *              clearingAccountDetails:
 *                 - clearingAccountId: 1
 *                   clearingAccountName: ca1
 *                   exchange: NSE
 *              tradingAccountDetails:
 *                 - tradingAccountId: 1
 *                   accountName: ta1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   userType:
 *                     type: string
 *                   roleId:
 *                     type: integer
 *                   status:
 *                     type: string
 *                   activeFlag:
 *                     type: integer
 *        example:
 *          code: SUCCESS
 *          data:
 *          firstName: Akshay
 *          lastName: Rein
 *          username: akshrei08
 *          email: akshay.rein@gulaq.com
 *          password: l4pE6RveITJtvDeiTuXnp.Hh9C8r2RCJcqjCNgGklOzAYxJ8i
 *          userType: customer
 *          roleId: developer
 *          status: blocked
 *          activeFlag: 1
 *      '400':
 *        description: User already present
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
 *                    customerData:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        firstName:
 *                          type: string
 *                        lastName:
 *                          type: string
 *                        username:
 *                          type: string
 *                        email:
 *                          type: string
 *                        mobile:
 *                          type: string
 *                        password:
 *                          type: string
 *                        userType:
 *                          type: string
 *                        adminId:
 *                          type: string
 *                        teamId:
 *                          type: string
 *                        roleId:
 *                          type: string
 *                        status:
 *                          type: string
 *                        activeFlag:
 *                          type: string
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *                    message:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  customerData:
 *                    id: 3
 *                    firstName: Kushal
 *                    lastName: Garg
 *                    username: kushgar5
 *                    email: kushal.garg@gulaq.com
 *                    mobile: 987654321
 *                    password: $2a$10$gDnQsfl5M5m8kotlM9nNmeRr9DXlRo17MWFNa3/
 *                    userType: userType
 *                    adminId: 2
 *                    teamId: 1
 *                    roleId: 1
 *                    status: active
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                  message: Oops! Customer with passed email or username already exists.
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /adminterminal/usermaintenance/updateUser:
 *  post:
 *    tags:
 *     - User Management
 *    summary: update existing user
 *    description: update existing user
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
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              roleId:
 *                type: integer
 *              email:
 *                type: string
 *              clearingAccountDetails:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    clearingAccountId:
 *                      type: string
 *                    clearingAccountName:
 *                      type: string
 *                    exchange:
 *                      type: string
 *              tradingAccountDetails:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    tradingAccountId:
 *                      type: string
 *                    accountName:
 *                      type: string
 *            example:
 *              username: akshrei08
 *              password: qwe
 *              firstName: Akshay
 *              lastName: Rein
 *              roleId: 1
 *              email: akshay.rein@gulaq.com
 *              clearingAccountDetails:
 *                 - clearingAccountId: 1
 *                   clearingAccountName: ca1
 *                   exchange: NSE
 *              tradingAccountDetails:
 *                 - tradingAccountId: 1
 *                   accountName: ta1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   userType:
 *                     type: string
 *                   roleId:
 *                     type: string
 *                   status:
 *                     type: string
 *                   activeFlag:
 *                     type: integer
 *             example:
 *               code: SUCCESS
 *               data:
 *                 firstName: Akshay
 *                 lastName: Rein
 *                 username: akshrei08
 *                 email: akshay.rein@gulaq.com
 *                 password: l4pE6RveITJtvDeiTuXnp.Hh9C8r2RCJcqjCNgGklOzAYxJ8i
 *                 userType: customer
 *                 roleId: 1
 *                 status: blocked
 *                 activeFlag: 1
 *      '404':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: NOT_FOUND
 *                error:
 *                  message: Oops! Customer with passed email and username dosent exist.
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /adminterminal/usermaintenance/blockUser/{userId}:
 *  get:
 *    tags:
 *     - User Management
 *    summary: Block User
 *    description: block user
 *    parameters:
 *     - name: userId
 *       in: path
 *       required: true
 *       description: Numeric ID of the admin to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: SUCCESS
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
 *                    customerData:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        firstName:
 *                          type: string
 *                        lastName:
 *                          type: string
 *                        username:
 *                          type: string
 *                        email:
 *                          type: string
 *                        mobile:
 *                          type: string
 *                        password:
 *                          type: string
 *                        userType:
 *                          type: string
 *                        adminId:
 *                          type: string
 *                        teamId:
 *                          type: string
 *                        roleId:
 *                          type: string
 *                        status:
 *                          type: string
 *                        activeFlag:
 *                          type: string
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *                    message:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  customerData:
 *                    id: 3
 *                    firstName: Kushal
 *                    lastName: Garg
 *                    username: kushgar5
 *                    email: kushal.garg@gulaq.com
 *                    mobile: 987654321
 *                    password: $2a$10$gDnQsfl5M5m8kotlM9nNmeRr9DXlRo17MWFNa3/
 *                    userType: userType
 *                    adminId: 2
 *                    teamId: 1
 *                    roleId: 1
 *                    status: active
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                  message: User 3 blocked !
 *      '404':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: NOT_FOUND
 *                error:
 *                  message: Oops! Customer with passed email and username dosent exist.
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /adminterminal/usermaintenance/unblockUser/{userId}:
 *  get:
 *    tags:
 *     - User Management
 *    summary: Unblock User
 *    description: unblock user
 *    parameters:
 *     - name: userId
 *       in: path
 *       required: true
 *       description: Numeric ID of the admin to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: SUCCESS
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
 *                    customerData:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        firstName:
 *                          type: string
 *                        lastName:
 *                          type: string
 *                        username:
 *                          type: string
 *                        email:
 *                          type: string
 *                        mobile:
 *                          type: string
 *                        password:
 *                          type: string
 *                        userType:
 *                          type: string
 *                        adminId:
 *                          type: string
 *                        teamId:
 *                          type: string
 *                        roleId:
 *                          type: string
 *                        status:
 *                          type: string
 *                        activeFlag:
 *                          type: string
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *                    message:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  customerData:
 *                    id: 3
 *                    firstName: Kushal
 *                    lastName: Garg
 *                    username: kushgar5
 *                    email: kushal.garg@gulaq.com
 *                    mobile: 987654321
 *                    password: $2a$10$gDnQsfl5M5m8kotlM9nNmeRr9DXlRo17MWFNa3/
 *                    userType: userType
 *                    adminId: 2
 *                    teamId: 1
 *                    roleId: 1
 *                    status: active
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                  message: User 3 active !
 *
 *      '400':
 *        description: Bad request
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
 *                code: NOT_FOUND
 *                data:
 *                  message: User cannot be unblocked as it is not assigned to any team.
 *      '404':
 *        description: User Not Found
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
 *                code: NOT_FOUND
 *                data:
 *                  message: Oops! Customer with passed email and username dosent exist.
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /adminterminal/usermaintenance/deleteUser/{userId}:
 *  get:
 *    tags:
 *     - User Management
 *    summary: Delete User
 *    description: Delete user
 *    parameters:
 *     - name: userId
 *       in: path
 *       required: true
 *       description: Numeric ID of the admin to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: SUCCESS
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
 *                    customerData:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                        firstName:
 *                          type: string
 *                        lastName:
 *                          type: string
 *                        username:
 *                          type: string
 *                        email:
 *                          type: string
 *                        mobile:
 *                          type: string
 *                        password:
 *                          type: string
 *                        userType:
 *                          type: string
 *                        adminId:
 *                          type: string
 *                        teamId:
 *                          type: string
 *                        roleId:
 *                          type: string
 *                        status:
 *                          type: string
 *                        activeFlag:
 *                          type: string
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *                    message:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  customerData:
 *                    id: 3
 *                    firstName: Kushal
 *                    lastName: Garg
 *                    username: kushgar5
 *                    email: kushal.garg@gulaq.com
 *                    mobile: 987654321
 *                    password: $2a$10$gDnQsfl5M5m8kotlM9nNmeRr9DXlRo17MWFNa3/
 *                    userType: userType
 *                    adminId: 2
 *                    teamId: 1
 *                    roleId: 1
 *                    status: active
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                  message: User 3 deleted !
 *      '404':
 *        description: Server Error
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
 *                code: NOT_FOUND
 *                data:
 *                  message: Oops! Customer with passed email and username dosent exist.
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /login/forgot/send-otp:
 *  post:
 *    tags:
 *     - Authentication
 *    summary: Send OTP
 *    description: Send OTP
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *            example:
 *              username: adibak28
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                   mobile:
 *                      type: int
 *                   email:
 *                      type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 message: OTP sent to registered email and phone
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: NO_USER_FOUND
 *               data:
 *                 message: Email and Mobile no. not found for the customer... contact admin !
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /login/forgot/check-otp:
 *  post:
 *    tags:
 *     - Authentication
 *    summary: Check OTP
 *    description: for testing purpose the OTP is 1234 and new Password reset is 'abc'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              otp:
 *                type: string
 *                description: in testing ENV the OTP is 1234
 *            example:
 *              username: adibak28
 *              otp: 1234
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 message: Password reset
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: NO_USER_FOUND
 *               data:
 *                 message: No such user exist
 *      '400':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: OTP_MISMATCH
 *               data:
 *                 message: OTP does not match
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /change-password:
 *  post:
 *    tags:
 *     - Authentication
 *    summary: Change Password
 *    description: Change Password
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              oldPassword:
 *                type: string
 *              newPassword:
 *                type: string
 *            example:
 *              oldPassword: someOldPassword
 *              newPassword: someNewPassword
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 message: Password reset
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: NO_USER_FOUND
 *               data:
 *                 message: No such user exist
 *      '400':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: OTP_MISMATCH
 *               data:
 *                 message: OTP does not match
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/strategyGroups/available:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Fetch Available strategy groups
 *    description: When this API is called it returns an array of strategy groups available
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 5
 *                    name: ST Group 4
 *                    description: some description
 *                  - id: 6
 *                    name: ST Group 6
 *                    description: some description
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/users/available:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Fetch Available strategy groups
 *    description: When this API is called it returns an array of strategy groups available
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                   id:
 *                     type: integer
 *                   username:
 *                     type: string
 *                   firstName:
 *                     type: string
 *                   lastname:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 13
 *                    username: akshrei08
 *                    firstName: Akshay
 *                    lastName: Zen
 *                  - id: 14
 *                    username: vinamraa01
 *                    firstName: Vinamraa
 *                    lastName: Bajpai
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/strategyTemplates:
 *  get:
 *    tags:
 *     - Admin
 *    summary: returns strategy templastes
 *    description: returns strategy templates
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                   id:
 *                     type: integer
 *                   adminId:
 *                     type: integer
 *                   templateName:
 *                     type: string
 *                   description:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 5
 *                    adminId: 3
 *                    templateName: Test Strategy 1
 *                    description: some description
 *                  - id: 6
 *                    adminId: 3
 *                    templateName: Test Strategy 2
 *                    description: some description
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/features:
 *  get:
 *    tags:
 *     - Admin
 *    summary: Get Admin Features
 *    description: When this API is called it returns an array of admin features
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 1
 *                    name: Coding
 *                    description: Writing code for App
 *                  - id: 2
 *                    name: ST Group 2
 *                    description: Designing System
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/teams/detail:
 *  get:
 *    tags:
 *     - Admin Teams
 *    summary: get team detail
 *    description: When this API is called it returns an array of admin teams detail
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                   id:
 *                     type: integer
 *                   adminId:
 *                     type: integer
 *                   teamName:
 *                     type: string
 *                   description:
 *                     type: string
 *                   activeFlag:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 1
 *                    adminId: 2
 *                    teamName: Advanced
 *                    description: some description
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                    customerData: [Customer info under the team 1]
 *                    startegyTemplates: [Strategy Template info for the team 1]
 *                  - id: 1
 *                    adminId: 2
 *                    teamName: Advanced
 *                    description: some description
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                    customerData: [Customer info under the team 2]
 *                    startegyTemplates: [Strategy Template info for the team 2]
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/teams/detail/{teamId}:
 *  get:
 *    tags:
 *     - Admin Teams
 *    summary: get team detail
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    parameters:
 *     - name: teamId
 *       in: path
 *       required: true
 *       description: Numeric ID of the team to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                   id:
 *                     type: integer
 *                   adminId:
 *                     type: integer
 *                   teamName:
 *                     type: string
 *                   description:
 *                     type: string
 *                   activeFlag:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 1
 *                    adminId: 2
 *                    teamName: Advanced
 *                    description: some description
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                  - id: 1
 *                    adminId: 2
 *                    teamName: Advanced
 *                    description: some description
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/teams/createTeam:
 *  post:
 *    tags:
 *     - Admin Teams
 *    summary: get team detail
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              teamName:
 *                type: string
 *              teamDescription:
 *                type: string
 *              customers:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  customerId:
 *                    type: integer
 *              strategyTemplates:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  strategyTemplatedId:
 *                    type: integer
 *              strategyGroups:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  strategyGroupId:
 *                    type: integer
 *            example:
 *              teamName: Super Advanced
 *              teamDescription: This is super adv team
 *              customers:
 *                 - customerId: 13
 *                 - customerId: 14
 *              strategyTemplates:
 *                 - strategyTemplateId: 3
 *                 - strategyTemplateId: 4
 *              strategyGroups:
 *                 - strategyGroupId: 5
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 id:
 *                   type: integer
 *                 adminId:
 *                   type: integer
 *                 teamName:
 *                   type: string
 *                 description:
 *                   type: string
 *                 activeFlag:
 *                   type: boolean
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 id: 1
 *                 adminId: 2
 *                 teamName: Advanced
 *                 description: some description
 *                 activeFlag: true
 *                 createdAt: null
 *                 updatedAt: null
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/teams/updateTeam:
 *  post:
 *    tags:
 *     - Admin Teams
 *    summary: get team detail
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              teamId:
 *                type: integer
 *              teamName:
 *                type: string
 *              teamDescription:
 *                type: string
 *              customers:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  customerId:
 *                    type: integer
 *              strategyTemplates:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  strategyTemplatedId:
 *                    type: integer
 *              strategyGroups:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  strategyGroupId:
 *                    type: integer
 *            example:
 *              teamId: 2
 *              teamName: Adv
 *              teamDescription: This is adv team
 *              customers:
 *                 - customerId: 13
 *              strategyTemplates:
 *                 - strategyTemplateId: 3
 *              strategyGroups:
 *                 - strategyGroupId: 5
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 id:
 *                   type: integer
 *                 teamName:
 *                   type: string
 *                 description:
 *                   type: string
 *                 strategyTemplates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                     id:
 *                       type: integer
 *                     username:
 *                       type: string
 *                     firstname:
 *                       type: string
 *                     lastName:
 *                       type: string
 *                 startegyTemplates:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                     id:
 *                       type: integer
 *                     templateName:
 *                       type: string
 *                     isLong:
 *                       type: boolean
 *                     status:
 *                       type: integer
 *                     description:
 *                       type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 id: 2
 *                 teamName: Adv
 *                 description: some description
 *                 customerData:
 *                    - id: 13
 *                      userName: akshayrei08
 *                      firstName: Akshay
 *                      lastName: Zen
 *                 startegyTemplates:
 *                    - id: 13
 *                      templateName: akshayrei08
 *                      isLong: true
 *                      status: true
 *                      description: This is third strategy
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: NOT_FOUND
 *               data:
 *                 message: team with teamId = 2 not found
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/teams/deleteTeam/{teamId}:
 *  get:
 *    tags:
 *     - Admin Teams
 *    summary: Block User
 *    description: block user
 *    parameters:
 *     - name: teamId
 *       in: path
 *       required: true
 *       description: Numeric ID of the admin to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: SUCCESS
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
 *                    team:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: integer
 *                        adminId:
 *                          type: integer
 *                        description:
 *                          type: string
 *                        activeFlag:
 *                          type: boolean
 *                        createdAt:
 *                          type: string
 *                        updatedAt:
 *                          type: string
 *                    message:
 *                      type: string
 *              example:
 *                code: SUCCESS
 *                data:
 *                  team:
 *                    id: 3
 *                    adminId: 2
 *                    teamName: Advanced
 *                    description: some Description
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *      '404':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: NOT_FOUND
 *                error:
 *                  message: Oops! Customer with passed email and username dosent exist.
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/roles/detail:
 *  get:
 *    tags:
 *     - Admin Roles
 *    summary: Get Admin Roles Deatils
 *    description: fetch role details
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   id:
 *                     type: integer
 *                   roleName:
 *                     type: string
 *                   description:
 *                     type: string
 *                   adminId:
 *                     type: integer
 *                   activeFlag:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   features:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 2
 *                    roleName: Adv
 *                    description: some description
 *                    adminId: 2
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                    features:
 *                       - id: 13
 *                         name: akshay
 *                         description: Description
 *                       - id: 14
 *                         name: yash
 *                         description: Another Description
 *                  - id: 3
 *                    roleName: Ada
 *                    description: some descriptiona
 *                    adminId: 3
 *                    activeFlag: true
 *                    createdAt: null
 *                    updatedAt: null
 *                    features:
 *                       - id: 13
 *                         name: akshay
 *                         description: Description
 *                       - id: 14
 *                         name: yash
 *                         description: Another Description
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: NOT_FOUND
 *               data:
 *                 message: team with teamId = 2 not found
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/roles/detail/{roleId}:
 *  get:
 *    tags:
 *     - Admin Roles
 *    summary: Get Admin Roles Deatils
 *    description: fetch role details
 *    parameters:
 *     - name: roleId
 *       in: path
 *       required: true
 *       description: Numeric ID of the admin to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   roleName:
 *                     type: string
 *                   description:
 *                     type: string
 *                   adminId:
 *                     type: integer
 *                   activeFlag:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   features:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 id: 2
 *                 roleName: Adv
 *                 description: some description
 *                 adminId: 2
 *                 activeFlag: true
 *                 createdAt: null
 *                 updatedAt: null
 *                 features:
 *                    - id: 13
 *                      name: akshay
 *                      description: Description
 *                    - id: 14
 *                      name: yash
 *                      description: Another Description
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/roles/createRole:
 *  post:
 *    tags:
 *     - Admin Roles
 *    summary: Create Role
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              roleName:
 *                type: string
 *              roleDescription:
 *                type: string
 *              features:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  featureId:
 *                    type: integer
 *            example:
 *              roleName: Super Adv
 *              roleDescription: This is super adv team
 *              features:
 *                 - featureId: 13
 *                 - featureId: 14
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 activeFlag:
 *                   type: boolean
 *                 id:
 *                   type: integer
 *                 roleName:
 *                   type: string
 *                 description:
 *                   type: string
 *                 adminId:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 activeFlag: true
 *                 id: 1
 *                 roleName: Advanced
 *                 description: some description
 *                 adminId: 2
 *                 createdAt: 2021-05-17 10:54:19.927 +00:00
 *                 updatedAt: 2021-05-17 10:54:19.927 +00:00
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/roles/updateRole:
 *  post:
 *    tags:
 *     - Admin Roles
 *    summary: Update Role
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              roleId:
 *                type: integer
 *              roleName:
 *                type: string
 *              roleDescription:
 *                type: string
 *              features:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                  featureId:
 *                    type: integer
 *            example:
 *              roleId: 2
 *              roleName: Super Adv
 *              roleDescription: This is super adv team
 *              features:
 *                 - featureId: 13
 *                 - featureId: 14
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 id:
 *                   type: integer
 *                 roleName:
 *                   type: string
 *                 description:
 *                   type: string
 *                 features:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       description:
 *                         type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 id: 1
 *                 roleName: Advanced
 *                 description: some description
 *                 features:
 *                    - id: 2
 *                      name: designing
 *                      description: Designing System
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/roles/deleteRole/{roleId}:
 *  get:
 *    tags:
 *     - Admin Roles
 *    summary: Delete Role
 *    description: delete the role
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   role:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       roleName:
 *                         type: string
 *                       description:
 *                         type: string
 *                       adminId:
 *                         type: integer
 *                       activeFlag:
 *                         type: boolean
 *                       createdAt:
 *                         type: string
 *                       updatedAt:
 *                         type: string
 *                   message:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 role:
 *                   id: 1
 *                   roleName: Advanced
 *                   description: some description
 *                   adminId: 2
 *                   activeFlag: true
 *                   createdAt: null
 *                   updatedAt: null
 *                 message: Role with Role Id 1 deleted !
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/risk/monitor/log:
 *  post:
 *    tags:
 *     - Admin Risks
 *    summary: Logs to Admin monitor
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              team:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    teamId:
 *                      type: integer
 *              tradingAccount:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    tradingAccountId:
 *                      type: integer
 *            example:
 *              team:
 *                 - teamId: 1
 *              tradingAccount:
 *                 - tradingAccountId: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 message:
 *                   type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 message: Some Message
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/risk/monitor/live:
 *  post:
 *    tags:
 *     - Admin Risks
 *    summary: Live to Admin risk monitor
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              team:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    teamId:
 *                      type: integer
 *              tradingAccount:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    tradingAccountId:
 *                      type: integer
 *            example:
 *              team:
 *                 - teamId: 1
 *              tradingAccount:
 *                 - tradingAccountId: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 message:
 *                   type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 message: Teams/Trading Account live
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/risk/monitor/squareOff:
 *  post:
 *    tags:
 *     - Admin Risks
 *    summary: squareOff to Admin monitor
 *    description: When this API is called it returns an array of admin teams detail respect to specific user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              team:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    teamId:
 *                      type: integer
 *              tradingAccount:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    tradingAccountId:
 *                      type: integer
 *            example:
 *              team:
 *                 - teamId: 1
 *              tradingAccount:
 *                 - tradingAccountId: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                 message:
 *                   type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                 message: Some Message
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/risk/parameters:
 *  get:
 *    tags:
 *     - Admin Risks
 *    summary: Get Admin risks parameters
 *    description: Fetches Admin Risk Parameters
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   id:
 *                     type: integer
 *                   riskParamName:
 *                     type: string
 *                   description:
 *                     type: string
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - id: 2
 *                    riskParamName: Adv
 *                    description: some description
 *                  - id: 3
 *                    riskParamName: Ada
 *                    description: some descriptiona
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/risk/configured/tradingAccounts:
 *  get:
 *    tags:
 *     - Admin Risks
 *    summary: Get Admin risks configured trading account parameters
 *    description: Fetches Admin Risk Parameters
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: array
 *                 items:
 *                   customerData:
 *                     type: integer
 *                   tradingAccountData:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       clearingAccountId:
 *                         type: integer
 *             example:
 *               code: SUCCESS
 *               data:
 *                  - customerData: 2
 *                    tradingAccountData:
 *                      id: 1
 *                      name: ta1
 *                      clearingAccountId: 1
 *                  - customerData: 2
 *                    tradingAccountData:
 *                      id: 1
 *                      name: ta1
 *                      clearingAccountId: 1
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /admin/risk/configure/admin:
 *  post:
 *    tags:
 *     - Admin Risks
 *    summary: Configure admin risks
 *    description: Use to login a user and responds with a JSON Web Token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              risk:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    riskParamId:
 *                      type: string
 *                    alert:
 *                      type: string
 *                    warning:
 *                      type: string
 *                    urgent:
 *                      type: string
 *                    limit:
 *                      type: string
 *                    limitAmount:
 *                      type: string
 *            example:
 *              risk:
 *                 - riskParamId: 2
 *                   alert: 10
 *                   warning: 60
 *                   urgent: 90
 *                   limit: 100
 *                   limitAmount: 10
 *                 - riskParamId: 3
 *                   alert: 10
 *                   warning: 60
 *                   urgent: 90
 *                   limit: 100
 *                   limitAmount: 10
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
 *                  token: risk configured for client
 *      '400':
 *        description: NO_CONFIGURATION
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    message: error is not defined
 *              example:
 *                code: NO_CONFIGURATION
 *                error:
 *                  message: error is not defined
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/risk/configure/team:
 *  post:
 *    tags:
 *     - Admin Risks
 *    summary: Configure admin risks for Team
 *    description: Use to login a user and responds with a JSON Web Token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              teamId:
 *                type: integer
 *              risk:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    riskParamId:
 *                      type: string
 *                    alert:
 *                      type: string
 *                    warning:
 *                      type: string
 *                    urgent:
 *                      type: string
 *                    limit:
 *                      type: string
 *                    limitAmount:
 *                      type: string
 *            example:
 *              teamId: 2
 *              risk:
 *                 - riskParamId: 2
 *                   alert: 10
 *                   warning: 60
 *                   urgent: 90
 *                   limit: 100
 *                   limitAmount: 10
 *                 - riskParamId: 3
 *                   alert: 10
 *                   warning: 60
 *                   urgent: 90
 *                   limit: 100
 *                   limitAmount: 10
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
 *                  token: risk configured for client
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/risk/configure/tradingAccount:
 *  post:
 *    tags:
 *     - Admin Risks
 *    summary: Configure admin risks for trading account
 *    description: Use to login a user and responds with a JSON Web Token
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              tradingAccountId:
 *                type: integer
 *              risk:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                    riskParamId:
 *                      type: string
 *                    alert:
 *                      type: string
 *                    warning:
 *                      type: string
 *                    urgent:
 *                      type: string
 *                    limit:
 *                      type: string
 *                    limitAmount:
 *                      type: string
 *            example:
 *              tradingAccountId: 2
 *              risk:
 *                 - riskParamId: 2
 *                   alert: 10
 *                   warning: 60
 *                   urgent: 90
 *                   limit: 100
 *                   limitAmount: 10
 *                 - riskParamId: 3
 *                   alert: 10
 *                   warning: 60
 *                   urgent: 90
 *                   limit: 100
 *                   limitAmount: 10
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
 *                  token: risk configured for client
 *      '500':
 *        description: Server Error
 *        content:
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
 *                  example:
 *                    name: ReferenceError
 *                    message: error is not defined
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: ReferenceError
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/risk/import/configuration/{tradingAccountId}:
 *  get:
 *    tags:
 *     - Admin Risks
 *    summary: Get risk for passed trading account ID
 *    description: Get risk for passed trading account ID
 *    parameters:
 *     - name: tradingAccountId
 *       in: path
 *       required: true
 *       description: Numeric ID of the trading account to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
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
 *                  risk: [Risk data for trading account]
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  message: error is not defined
 */

/**
 * @swagger
 * /admin/risk/detail:
 *  get:
 *    tags:
 *     - Admin Risks
 *    summary: Gives The Details of Risk
 *    description: Use to login a user and responds with a JSON Web Token
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                Admin:
 *                  type: string
 *                Team:
 *                  type: string
 *                Trading Account:
 *                  type: string
 *              example:
 *                Admin: Admin Risk Details
 *                Team: Team Risk Details
 *                Trading Account: Trading Account Risk Details
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  message: error is not defined
 */

/**
 * @swagger
 * /security/exchanges:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Gives Security exchanges
 *    description: Gives Security exchanges
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                type: string
 *            example:
 *              code: SUCCESS
 *              data:
 *                   - BSE
 *                   - BSE
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  message: error is not defined
 */

/**
 * @swagger
 * /security/instrumenTypes:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Gives Security instrumen Types
 *    description: Gives Security instrumen Types
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: object
 *              properties:
 *                key:
 *                  type: string
 *                name:
 *                  type: string
 *            example:
 *              code: SUCCESS
 *              data:
 *                 - key: Call-options
 *                   name: CE
 *                 - key: Put-options
 *                   name: PE
 *                 - key: Future
 *                   name: Future
 *      '500':
 *        description: Server Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: string
 *                error:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  message: error is not defined
 */

/**
 * @swagger
 * /security/securities:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: post Securities
 *    description: Use to login a user and responds with a JSON Web Token
 *    parameters:
 *       - in: query
 *         name: instrument
 *         schema:
 *           type: string
 *       - in: query
 *         name: exchange
 *         schema:
 *           type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                type: string
 *            example:
 *              code: SUCCESS
 *              data:
 *                 - Reliance
 *                 - INFY
 *                 - ACC
 *                 - HDFC
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
 * /security/expires:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: post Securities
 *    description: Use to login a user and responds with a JSON Web Token
 *    parameters:
 *       - in: query
 *         name: instrument
 *         schema:
 *           type: string
 *       - in: query
 *         name: exchange
 *         schema:
 *           type: string
 *       - in: query
 *         name: security
 *         schema:
 *           type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                type: string
 *            example:
 *              code: SUCCESS
 *              data:
 *                 - expiry: 2021-08-26T00:00:00.000Z
 *                   lotSize: 300
 *                 - expiry: 2021-09-30T00:00:00.000Z
 *                   lotSize: 300
 *                 - expiry: 2021-10-28T00:00:00.000Z
 *                   lotSize: 300
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
 * /security/strikes:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: post Securities
 *    description: Use to login a user and responds with a JSON Web Token
 *    parameters:
 *       - in: query
 *         name: instrument
 *         schema:
 *           type: string
 *       - in: query
 *         name: exchange
 *         schema:
 *           type: string
 *       - in: query
 *         name: security
 *         schema:
 *           type: string
 *       - in: query
 *         name: expiry
 *         schema:
 *           type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: string
 *            example:
 *              code: SUCCESS
 *              data: list of Securites
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
 * /strategyTemplate/builderObject:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Get strategy template builder object
 *    description: Get strategy template builder object
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                data:
 *                  type: object
 *                  properties:
 *                    condition:
 *                      type: object
 *                      properties:
 *                        entryConditions:
 *                          type: array
 *                          items:
 *                            type: string
 *                        exitConditions:
 *                          type: array
 *                          items:
 *                            type: string
 *                        operation:
 *                          type: array
 *                          items:
 *                            type: string
 *                        conditions:
 *                          type: object
 *                          properties:
 *                            timeTriggered:
 *                              type: object
 *                              properties:
 *                                enumName:
 *                                  type: string
 *                                displayName:
 *                                  type: string
 *                                type:
 *                                  type: string
 *                                inputObject:
 *                                  type: object
 *                                  properties:
 *                                    start:
 *                                      type: string
 *                                    end:
 *                                      type: string
 *                                inputString:
 *                                  type: string
 *                                args:
 *                                  type: object
 *                            marketTriggered:
 *                              type: object
 *                              properties:
 *                                enumName:
 *                                  type: string
 *                                displayName:
 *                                  type: string
 *                                type:
 *                                  type: string
 *                                operators:
 *                                  type: array
 *                                  items:
 *                                    type: string
 *                                operands:
 *                                  type: array
 *                                  items:
 *                                    type: string
 *                            trailingStopLoss:
 *                              type: object
 *                              properties:
 *                                enumName:
 *                                  type: string
 *                                displayName:
 *                                  type: string
 *                                type:
 *                                  type: string
 *                                inputObject:
 *                                  type: object
 *                                  properties:
 *                                    start:
 *                                      type: string
 *                                    end:
 *                                      type: string
 *                                inputString:
 *                                  type: string
 *                                args:
 *                                  type: object
 *                            targetProfit:
 *                              type: object
 *                              properties:
 *                                enumName:
 *                                  type: string
 *                                displayName:
 *                                  type: string
 *                                type:
 *                                  type: string
 *                                inputObject:
 *                                  type: object
 *                                  properties:
 *                                    start:
 *                                      type: string
 *                                    end:
 *                                      type: string
 *                                inputString:
 *                                  type: string
 *                                args:
 *                                  type: object
 *                    position:
 *                      type: object
 *                      properties:
 *                        pricing:
 *                          type: object
 *                          properties:
 *                            enumName:
 *                              type: string
 *                            displayName:
 *                              type: string
 *                            type:
 *                              type: string
 *                            operators:
 *                              type: array
 *                              items:
 *                                type: string
 *                            operands:
 *                              type: array
 *                              items:
 *                                type: string
 *                        quantity:
 *                          type: object
 *                          properties:
 *                            enumName:
 *                              type: string
 *                            displayName:
 *                              type: string
 *                            type:
 *                              type: string
 *                            operators:
 *                              type: array
 *                              items:
 *                                type: string
 *                            operands:
 *                              type: array
 *                              items:
 *                                type: string
 *                    algoExecution:
 *                      type: object
 *                      properties:
 *                        enumName:
 *                          type: string
 *                        display:
 *                          type: string
 *                        type:
 *                          type: string
 *                        operands:
 *                          type: array
 *                          items:
 *                            type: string
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Internal server error
 */

/**
 * @swagger
 * /strategyTemplate/submit:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Submit strategy Template
 *    description: Submit strategy Template
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *              name: Template_without_algo_exec
 *              description: This is a test strategy template with brackets, constants, additional securities (without algo execution)
 *              exchange: BSE
 *              securities:
 *                 - instrument: Equity
 *                   securityName: HDFC
 *                   expiry: null
 *                   strike: null
 *                   nickname: stock_equity
 *                   isAdditional: true
 *                   lotSize: 1
 *                 - instrument: Put_Option
 *                   securityName: HDFC
 *                   expiry: 2021-05-27T00:00:00.000Z
 *                   strike: 2350
 *                   nickname: stock_put
 *                   isAdditional: true
 *                   lotSize: 300
 *              constants:
 *                 - name: IV_Spread
 *                   value: null
 *              entryLegs:
 *                 - legId: 1
 *                   condition:
 *                      - type: OPERAND
 *                        trigger: TIMETRIGGERED
 *                        timeTriggered:
 *                          startTime: '9:00'
 *                          endTime: '3:30'
 *                      - type: OPERATION
 *                        value: AND
 *                      - type: OPERAND
 *                        trigger: MARKETTRIGGERED
 *                        marketTriggered:
 *                           - type: OPERAND
 *                             data: EA_OPERAND_MICRO_PRICE_QUANTITY
 *                             arguements:
 *                                - argName: NumberOfQuantities
 *                                  dataType: int
 *                                  argValue: IV_Spread
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_GREATER_THAN
 *                             arguements: []
 *                           - type: BRACKET
 *                             data: OPEN
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: PARAMETER
 *                             arguements:
 *                                - argName: NEW_TEMPLATE_PARAMETER
 *                                  dataType: string
 *                                  argValue: IV_Spread
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_ADD
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: CONSTANT
 *                             arguements:
 *                                - argName: CONSTANT
 *                                  dataType: double
 *                                  argValue: 100
 *                           - type: BRACKET
 *                             data: CLOSE
 *                             arguements: []
 *                   position:
 *                    - direction: BUY
 *                      security: stock_equity
 *                      pricing:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                        - type: OPERATION
 *                          data: EA_OPERATOR_ADD
 *                          arguements: []
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 50
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                      quantity: []
 *                   algoExecution: []
 *              exitCondition:
 *                condition:
 *                   - type: OPERAND
 *                     trigger: MARKETTRIGGERED
 *                     marketTriggered:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                   - type: OPERATION
 *                     data: EA_OPERATOR_LESS_THAN
 *                     arguements: []
 *                   - type: OPERAND
 *                     data: EA_OPERAND_EMA
 *                     arguements:
 *                        - argName: BarType
 *                          dataType: enum
 *                          argValue: Second
 *                        - argName: EmaHalfLife
 *                          dataType: int
 *                          argValue: 50
 *                        - argName: PriceType
 *                          dataType: enum
 *                          argValue: ASK
 *                action: TOB+x
 *    responses:
 *      '200':
 *        description: successfully added
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  message: Strategy template successfully saved with strategy template ID = 51
 */

/**
 * @swagger
 * /strategyTemplate/saveDraft:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Save draft of strategy template
 *    description: Save draft of strategy template
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             example:
 *              name: Draft_with_algo_exec
 *              description: This is a test strategy template with Algo Execution
 *              exchange: BSE
 *              securities:
 *                 - instrument: Equity
 *                   securityName: HDFC
 *                   expiry: null
 *                   strike: null
 *                   nickname: stock_equity
 *                   isAdditional: true
 *                   lotSize: 1
 *              constants: []
 *              entryLegs:
 *                 - legId: 1
 *                   condition: []
 *                   position:
 *                    - direction: BUY
 *                      security: stock_equity
 *                      pricing: []
 *                      quantity: []
 *                   algoExecution:
 *                      - type: OPERAND
 *                        data: EA_EXEC_ALGO_POV
 *                        arguements:
 *                           - argName: EndTimeInEpochMS
 *                             dataType: long
 *                             argValue: 1000000
 *                           - argName: LimitPrice
 *                             dataType: int
 *                             argValue: 50
 *                           - argName: StartTimeInEpochMS
 *                             dataType: long
 *                             argValue: 20000
 *                           - argName: TargetParticipation
 *                             dataType: double
 *                             argValue: 0.5
 *
 *              exitCondition:
 *                condition: []
 *                action: TOB+x
 *    responses:
 *      '200':
 *        description: successfully added
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  message: Strategy template successfully saved with strategy template ID = 53
 */

/**
 * @swagger
 * /strategyTemplate/modify:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Modify strategy Template
 *    description: Modify strategy Template
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *              id: 99
 *              name: Template_without_algo_exec
 *              description: This is a test strategy template with brackets, constants, additional securities (without algo execution)
 *              exchange: BSE
 *              securities:
 *                 - instrument: Equity
 *                   securityName: HDFC
 *                   expiry: null
 *                   strike: null
 *                   nickname: stock_equity
 *                   isAdditional: true
 *                 - instrument: Put_Option
 *                   securityName: HDFC
 *                   expiry: 2021-05-27T00:00:00.000Z
 *                   strike: 2350
 *                   nickname: stock_put
 *                   isAdditional: true
 *              constants:
 *                 - name: IV_Spread
 *                   value: null
 *              entryLegs:
 *                 - legId: 1
 *                   condition:
 *                      - type: OPERAND
 *                        trigger: TIMETRIGGERED
 *                        timeTriggered:
 *                          startTime: '9:00'
 *                          endTime: '3:30'
 *                      - type: OPERATION
 *                        value: AND
 *                      - type: OPERAND
 *                        trigger: MARKETTRIGGERED
 *                        marketTriggered:
 *                           - type: OPERAND
 *                             data: EA_OPERAND_MICRO_PRICE_QUANTITY
 *                             arguements:
 *                                - argName: NumberOfQuantities
 *                                  dataType: int
 *                                  argValue: IV_Spread
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_GREATER_THAN
 *                             arguements: []
 *                           - type: BRACKET
 *                             data: OPEN
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: PARAMETER
 *                             arguements:
 *                                - argName: NEW_TEMPLATE_PARAMETER
 *                                  dataType: string
 *                                  argValue: IV_Spread
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_ADD
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: CONSTANT
 *                             arguements:
 *                                - argName: CONSTANT
 *                                  dataType: double
 *                                  argValue: 100
 *                           - type: BRACKET
 *                             data: CLOSE
 *                             arguements: []
 *                   position:
 *                    - direction: BUY
 *                      security: stock_equity
 *                      pricing:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                        - type: OPERATION
 *                          data: EA_OPERATOR_ADD
 *                          arguements: []
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 50
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                      quantity: []
 *                   algoExecution: []
 *              exitCondition:
 *                condition:
 *                   - type: OPERAND
 *                     trigger: MARKETTRIGGERED
 *                     marketTriggered:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                   - type: OPERATION
 *                     data: EA_OPERATOR_LESS_THAN
 *                     arguements: []
 *                   - type: OPERAND
 *                     data: EA_OPERAND_EMA
 *                     arguements:
 *                        - argName: BarType
 *                          dataType: enum
 *                          argValue: Second
 *                        - argName: EmaHalfLife
 *                          dataType: int
 *                          argValue: 50
 *                        - argName: PriceType
 *                          dataType: enum
 *                          argValue: ASK
 *                action: TOB+x
 *    responses:
 *      '200':
 *        description: successfully added
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  message: Strategy template successfully saved with strategy template ID = 51
 */

/**
 * @swagger
 * /strategyTemplate/return/{strategyTemplateId}:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Get strategy template object
 *    description: Get strategy template object
 *    parameters:
 *     - name: strategyTemplateId
 *       in: path
 *       required: true
 *       description: Numeric ID of the strategy Template to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                data:
 *                  type: object
 *                  properties:
 *                    isComplete:
 *                      type: boolean
 *                    isApproved:
 *                      type: boolean
 *                    name:
 *                      type: string
 *                    description:
 *                      type: string
 *                    exchange:
 *                      type: string
 *                    securities:
 *                      type: array
 *                      items:
 *                        type: object
 *                        properties:
 *                          instrument:
 *                            type: string
 *                          securityName:
 *                            type: string
 *                          expiry:
 *                            type: string
 *                          strike:
 *                            type: integer
 *                          nickname:
 *                            type: string
 *                          lotSize:
 *                            type: integer
 *                    entryLegs:
 *                      type: string
 *                      example: array of legs
 *                    exitCondition:
 *                      type: object
 *                      properties:
 *                        condition:
 *                          type: string
 *                          example: array
 *                        action:
 *                          type: string
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            example:
 *              code: NOT_FOUND
 *              data:
 *                message: Strategy template with ID 10 does not exist
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: true
 */

/**
 * @swagger
 * /strategy/returnForUser:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Returns the strategies for the user
 *    description: If the user is an admin, returns the strategy made by the admin themselves as well as all the users under the admin. If user is not an admin, returns the templates in the same team as that user. If both isComplete and isApproved are not provided, it returns complete templates and incomplete strategies (drafts)
 *    parameters:
 *       - in: query
 *         name: isApproved
 *         schema:
 *           type: bit
 *       - in: query
 *         name: isComplete
 *         schema:
 *           type: bit
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 - id: 4
 *                   name: Test_1
 *                 - id: 6
 *                   name: Test_2
 *                 - id: 9
 *                   name: Test_3
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
 *                  name: ServerError
 *                  message: true
 */

/**
 * @swagger
 * /security/subscribe:
 *  post:
 *    tags:
 *     - Market Watch
 *    summary: subscribes security to watch list
 *    description: subscribes security to watch list
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              example:
 *                exchange: NSE
 *                dataFeedTicker: FINNIFTY21JUL19000PE
 *                pageNumber: 15
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *              example:
 *                code: SUCCESS
 *                data:
 *                  success: SECURITY ADDED SUCCESSFULLY
 *      '400':
 *         description: Range error
 *         content:
 *          application/json:
 *              example:
 *                code: SERVER_ERROR
 *                error:
 *                  name: RangeError
 *                  message: CAN'T ADD MORE SECURITIES TO THIS WATCHLIST
 *      '500':
 *         description: Duplication error
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
 *                  name: Error
 *                  message: SECURITY ALREADY SUBSCRIBED BY USER
 */

/**
 * @swagger
 * /security/unsubscribe:
 *  post:
 *    tags:
 *     - Market Watch
 *    summary: unsubscribes security from watch list
 *    description: unsubscribes security from watch list. Set removeAll to true to remove all securities of that page (no need to provide exchange and datafeed ticker in that case)
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              example:
 *                pageNumber: 15
 *                removeAll: false
 *                exchange: NSE
 *                dataFeedTicker: FINNIFTY21JUL19000PE
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *              example:
 *                code: SUCCESS
 *                data:
 *                  success: SECURITY REMOVED SUCCESSFULLY
 *      '500':
 *         description: RangeError
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
 *                  name: RangeError
 *                  message: SECURITY NOT SUBSCRIBED BY THE USER IN THIS WATCHLIST
 */

/**
 * @swagger
 * /strategy/params/{strategyTemplateId}:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Get parameters for the strategy template
 *    description: Get parameters for the strategy template
 *    parameters:
 *     - name: strategyTemplateId
 *       in: path
 *       required: true
 *       description: Numeric ID of the strategy Template to get the parameters of
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                  code: SUCCESS
 *                  data:
 *                    securityParams:
 *                      - instrument: Equity
 *                        securityName: HDFC
 *                        expiry: null
 *                        strike: null
 *                        nickname: stock_equity
 *                        isAdditional: true
 *                        lotSize: 1
 *                      - instrument: Put_Option
 *                        securityName: HDFC
 *                        expiry: 2021-05-27
 *                        strike: 2350
 *                        nickname: stock_put
 *                        isAdditional: true
 *                        lotSize: 300
 *                    constantParams:
 *                      - constantName: IV_Spread
 *                        value: null
 *                    legParams:
 *                      - legNumber: 1
 *                        position:
 *                          direction: BUY
 *                          security: stock_equity
 *                          isTotalQuantityLogic: false
 *                          isPricingLogic: true
 *                          isAlgoExecution: false
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               error:
 *                 name: TypeError
 *                 message: Cannot read property 'direction' of null
 */

/**
 * @swagger
 * /strategy/submit:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Submit strategy
 *    description: Submit strategy
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *              userId: 2
 *              strategyTemplateId: 70
 *              tradingAccountId: 5
 *              name: Strategy_without_algo_exec
 *              description: This is a test strategy with brackets, constants, additional securities (without algo execution)
 *              exchange: BSE
 *              securities:
 *                 - instrument: Equity
 *                   securityName: HDFC
 *                   expiry: null
 *                   strike: null
 *                   nickname: stock_equity
 *                   isAdditional: true
 *                   lotSize: 1
 *                 - instrument: Put_Option
 *                   securityName: HDFC
 *                   expiry: 2021-05-27T00:00:00.000Z
 *                   strike: 2350
 *                   nickname: stock_put
 *                   isAdditional: true
 *                   lotSize: 300
 *              constants:
 *                 - name: IV_Spread
 *                   value: 10
 *              entryLegs:
 *                 - legId: 1
 *                   condition:
 *                      - type: OPERAND
 *                        trigger: TIMETRIGGERED
 *                        timeTriggered:
 *                          startTime: '9:00'
 *                          endTime: '3:30'
 *                      - type: OPERATION
 *                        value: AND
 *                      - type: OPERAND
 *                        trigger: MARKETTRIGGERED
 *                        marketTriggered:
 *                           - type: OPERAND
 *                             data: EA_OPERAND_MICRO_PRICE_QUANTITY
 *                             arguements:
 *                                - argName: NumberOfQuantities
 *                                  dataType: int
 *                                  argValue: 10
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_GREATER_THAN
 *                             arguements: []
 *                           - type: BRACKET
 *                             data: OPEN
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: PARAMETER
 *                             arguements:
 *                                - argName: NEW_TEMPLATE_PARAMETER
 *                                  dataType: string
 *                                  argValue: IV_Spread
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_ADD
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: CONSTANT
 *                             arguements:
 *                                - argName: CONSTANT
 *                                  dataType: double
 *                                  argValue: 100
 *                           - type: BRACKET
 *                             data: CLOSE
 *                             arguements: []
 *                   position:
 *                    - direction: BUY
 *                      security: stock_equity
 *                      pricing:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                        - type: OPERATION
 *                          data: EA_OPERATOR_ADD
 *                          arguements: []
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 50
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                      quantity: []
 *                      orderQty: 10
 *                      totalQty: 100
 *                   algoExecution: []
 *              exitCondition:
 *                condition:
 *                   - type: OPERAND
 *                     trigger: MARKETTRIGGERED
 *                     marketTriggered:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                   - type: OPERATION
 *                     data: EA_OPERATOR_LESS_THAN
 *                     arguements: []
 *                   - type: OPERAND
 *                     data: EA_OPERAND_EMA
 *                     arguements:
 *                        - argName: BarType
 *                          dataType: enum
 *                          argValue: Second
 *                        - argName: EmaHalfLife
 *                          dataType: int
 *                          argValue: 50
 *                        - argName: PriceType
 *                          dataType: enum
 *                          argValue: ASK
 *                action: TOB+x
 *                value: 2
 *    responses:
 *      '200':
 *        description: successfully added
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  message: Strategy successfully saved with strategy ID = 51
 *      '400':
 *        description: bad request
 *        content:
 *          application/json:
 *            example:
 *              code: BAD_REQUEST
 *              data:
 *                  message: Trading Account Id missing :(
 */

/**
 * @swagger
 * /strategy/saveDraft:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Save draft of strategy
 *    description: Save draft of strategy
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             example:
 *              userId: 2
 *              strategyTemplateId: 70
 *              tradingAccountId: 5
 *              name: Draft_with_algo_exec
 *              description: This is a test strategy template with Algo Execution
 *              exchange: BSE
 *              securities:
 *                 - instrument: Equity
 *                   securityName: HDFC
 *                   expiry: null
 *                   strike: null
 *                   nickname: stock_equity
 *                   isAdditional: true
 *                   lotSize: 1
 *              constants:
 *                 - name: EndTimeInEpochMS
 *                   value: 1000000
 *                 - name: LimitPrice
 *                   value: 50
 *                 - name: StartTimeInEpochMS
 *                   value: 20000
 *                 - name: TargetParticipation
 *                   value: 0.5
 *              entryLegs:
 *                 - legId: 1
 *                   condition: []
 *                   position:
 *                    - direction: BUY
 *                      security: stock_equity
 *                      pricing: []
 *                      quantity:
 *                         orderQuantity: 10
 *                         totalQuantity: 10
 *                   algoExecution:
 *                      - type: OPERAND
 *                        data: EA_EXEC_ALGO_POV
 *                        arguements:
 *                           - argName: EndTimeInEpochMS
 *                             dataType: long
 *                             argValue: 1000000
 *                           - argName: LimitPrice
 *                             dataType: int
 *                             argValue: 50
 *                           - argName: StartTimeInEpochMS
 *                             dataType: long
 *                             argValue: 20000
 *                           - argName: TargetParticipation
 *                             dataType: double
 *                             argValue: 0.5
 *
 *              exitCondition:
 *                condition: []
 *                action: TOB+x
 *                value: 2
 *    responses:
 *      '200':
 *        description: successfully added
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  message: Strategy Saved Successfully as draft with id = 53
 *      '400':
 *        description: bad request
 *        content:
 *          application/json:
 *            example:
 *              code: BAD_REQUEST
 *              data:
 *                  message: Trading Account Id missing :(
 */

/**
 * @swagger
 * /strategy/modify:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Modify strategy
 *    description: Modify strategy
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *              userId: 2
 *              id: 100
 *              strategyTemplateId: 99
 *              tradingAccountId: 5
 *              name: Strategy_without_algo_exec
 *              description: This is a test strategy with brackets, constants, additional securities (without algo execution)
 *              exchange: BSE
 *              securities:
 *                 - instrument: Equity
 *                   securityName: HDFC
 *                   expiry: null
 *                   strike: null
 *                   nickname: stock_equity
 *                   isAdditional: true
 *                 - instrument: Put_Option
 *                   securityName: HDFC
 *                   expiry: 2021-05-27T00:00:00.000Z
 *                   strike: 2350
 *                   nickname: stock_put
 *                   isAdditional: true
 *              constants:
 *                 - name: IV_Spread
 *                   value: 10
 *              entryLegs:
 *                 - legId: 1
 *                   condition:
 *                      - type: OPERAND
 *                        trigger: TIMETRIGGERED
 *                        timeTriggered:
 *                          startTime: '9:00'
 *                          endTime: '3:30'
 *                      - type: OPERATION
 *                        value: AND
 *                      - type: OPERAND
 *                        trigger: MARKETTRIGGERED
 *                        marketTriggered:
 *                           - type: OPERAND
 *                             data: EA_OPERAND_MICRO_PRICE_QUANTITY
 *                             arguements:
 *                                - argName: NumberOfQuantities
 *                                  dataType: int
 *                                  argValue: 10
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_GREATER_THAN
 *                             arguements: []
 *                           - type: BRACKET
 *                             data: OPEN
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: PARAMETER
 *                             arguements:
 *                                - argName: NEW_TEMPLATE_PARAMETER
 *                                  dataType: string
 *                                  argValue: IV_Spread
 *                           - type: OPERATION
 *                             data: EA_OPERATOR_ADD
 *                             arguements: []
 *                           - type: CONSTANT
 *                             data: CONSTANT
 *                             arguements:
 *                                - argName: CONSTANT
 *                                  dataType: double
 *                                  argValue: 100
 *                           - type: BRACKET
 *                             data: CLOSE
 *                             arguements: []
 *                   position:
 *                    - direction: BUY
 *                      security: stock_equity
 *                      pricing:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                        - type: OPERATION
 *                          data: EA_OPERATOR_ADD
 *                          arguements: []
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 50
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                      quantity: []
 *                   algoExecution: []
 *              exitCondition:
 *                condition:
 *                   - type: OPERAND
 *                     trigger: MARKETTRIGGERED
 *                     marketTriggered:
 *                        - type: OPERAND
 *                          data: EA_OPERAND_EMA
 *                          arguements:
 *                             - argName: BarType
 *                               dataType: enum
 *                               argValue: Second
 *                             - argName: EmaHalfLife
 *                               dataType: int
 *                               argValue: 200
 *                             - argName: PriceType
 *                               dataType: enum
 *                               argValue: ASK
 *                   - type: OPERATION
 *                     data: EA_OPERATOR_LESS_THAN
 *                     arguements: []
 *                   - type: OPERAND
 *                     data: EA_OPERAND_EMA
 *                     arguements:
 *                        - argName: BarType
 *                          dataType: enum
 *                          argValue: Second
 *                        - argName: EmaHalfLife
 *                          dataType: int
 *                          argValue: 50
 *                        - argName: PriceType
 *                          dataType: enum
 *                          argValue: ASK
 *                action: TOB+x
 *                value: 2
 *    responses:
 *      '200':
 *        description: successfully added
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  message: Strategy successfully saved with strategy ID = 51
 *      '400':
 *        description: bad request
 *        content:
 *          application/json:
 *            example:
 *              code: BAD_REQUEST
 *              data:
 *                  message: Trading Account Id missing :(
 */

/**
 * @swagger
 * /strategy/return/{strategyId}:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: Get strategy object
 *    description: Get strategy object
 *    parameters:
 *     - name: strategyId
 *       in: path
 *       required: true
 *       description: Numeric ID of the strategy to get
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description:
 *        content:
 *          application/json:
 *            schema:
 *              example:
 *                  code: SUCCESS
 *                  data:
 *                      isComplete: true
 *                      isApproved: false
 *                      name: Strategy_without_algo_exec
 *                      description: This is a test strategy template with brackets, constants, additional securities (without algo execution)
 *                      exchange: BSE
 *                      securities:
 *                          - instrument: Equity
 *                            securityName: HDFC
 *                            expiry: null
 *                            strike: null
 *                            nickname: stock_equity
 *                            isAdditional: true
 *                      constants:
 *                          - name: IV_Spread
 *                            value: 10
 *                      entryLegs:
 *                          - legId: 1
 *                            condition:
 *                              - type: OPERAND
 *                                trigger: TIMETRIGGERED
 *                                timeTriggered:
 *                                  startTime: 9:30
 *                                  endTime: 3:30
 *                            position:
 *                              - direction: BUY
 *                                security: stock_equity
 *                                pricing: []
 *                                quanitity: []
 *                            algoExecution: []
 *                      exitCondition:
 *                          condition:
 *                              - type: OPERAND
 *                                trigger: TIMETRIGGERED
 *                                timeTriggered:
 *                                  startTime: 9:30
 *                                  endTime: 3:30
 *                          action: TOB+x
 *                          value: 2
 *                      strategyTemplateId: 70
 *      '404':
 *        description:
 *        content:
 *          application/json:
 *            example:
 *              code: NOT_FOUND
 *              data:
 *                message: Strategy rule with ID 10 does not exist
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: true
 */

/**
 * @swagger
 * /security/getAllSecurities:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: get all Securities of an exchange
 *    description: get all Securities of an exchange
 *    parameters:
 *       - in: query
 *         name: exchange
 *         schema:
 *           type: string
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                type: string
 *            example:
 *              code: SUCCESS
 *              data:
 *                 - Reliance
 *                 - INFY
 *                 - ACC
 *                 - HDFC
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
 * /security/getAllSecuritiesV2:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: get all Securities of an exchange
 *    description: get all Securities of an exchange
 *    parameters:
 *       - in: query
 *         name: searchString
 *         required: true
 *         schema:
 *           type: string
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            code:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                type: string
 *            example:
 *              code: SUCCESS
 *              data:
 *                 - Reliance
 *                 - INFY
 *                 - ACC
 *                 - HDFC
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
 * /security/pageName:
 *  get:
 *    tags:
 *     - Market Watch
 *    summary: gets the pagename of that page number
 *    description: gets the pagename of that page number
 *    parameters:
 *       - in: query
 *         name: pageNumber
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 pageName: Name of the first page
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
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: true
 */

/**
 * @swagger
 * /security/updatePageName:
 *  post:
 *    tags:
 *     - Market Watch
 *    summary: updates the pagename of given pagenumber
 *    description: updates the pagename of given pagenumber
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *              example:
 *                pageNumber: 1
 *                pageName: Name of the first page
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *              example:
 *                code: SUCCESS
 *                data:
 *                  message: Page name updated to Name of the first page
 *      '500':
 *         description: Server error
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
 *                  name: Error
 *                  message: Internal server error
 */

/**
 * @swagger
 * /security/watchList:
 *  get:
 *    tags:
 *     - Market Watch
 *    summary: gets the watchList of that page number
 *    description: gets the watchList of that page number
 *    parameters:
 *       - in: query
 *         name: pageNumber
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 watchList:
 *                    - dataFeedTicker: DIVISLAB21JUL4650CE
 *                      esteeId: INE361B01024IS02202107294650
 *                      sequenceNumber: 0
 *                    - dataFeedTicker: DIVISLAB21JUL4750CE
 *                      esteeId: INE361B01024IS02202107294750
 *                      sequenceNumber: 1
 *                    - dataFeedTicker: DIVISLAB21JUL4850CE
 *                      esteeId: INE361B01024IS02202107294850
 *                      sequenceNumber: 2
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
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: true
 */

/**
 * @swagger
 * /strategyAnalyzer/state/{strategyId}:
 *  get:
 *    tags:
 *     - Strategy Analyzer
 *    summary: Gives current state of the strategy and possible next states
 *    description: Gives current state of the strategy and possible next states
 *    parameters:
 *     - name: strategyId
 *       in: path
 *       required: true
 *       description: Gives current state of the strategy and possible next states
 *       schema:
 *         type : integer
 *         format: int64
 *         minimum: 1
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 status: PAUSED
 *                 enablePause: false
 *                 enableResume: true
 *                 enableSquareOff: false
 *                 enableClose: true
 *                 enableModify: true
 *                 enableManualOrder: false
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             example:
 *               code: BAD_REQUEST
 *               data:
 *                 message: Startegy status not found
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */

/**
 * @swagger
 * /strategyAnalyzer/table:
 *  get:
 *    tags:
 *     - Strategy Analyzer
 *    summary: Gives the strategy analyzer table
 *    description: Gives the strategy analyzer table
 *    parameters:
 *      - in: query
 *        description: which pagenumber to fetch
 *        name: pageNumber
 *        schema:
 *          type: integer
 *      - in: query
 *        description: number of entries to be present on each page
 *        name: entriesPerPage
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 analyzerObject:
 *                   -  error: null
 *                      data:
 *                         strategyTemplateId: 70
 *                         strategyTemplateName: Template_without_algo_exec
 *                         id: 85
 *                         strategyName: Strategy_without_algo_exec
 *                         numberOfLegs: 1
 *                         legData:
 *                           -  legId: 29
 *                              legNumber: 1
 *                              positionId: 12
 *                              security: BSE, HDFC
 *                              totalQty: 500
 *                   -  error: null
 *                      data:
 *                         strategyTemplateId: 70
 *                         strategyTemplateName: Template_without_algo_exec
 *                         id: 86
 *                         strategyName: Strategy_without_algo_exec
 *                         numberOfLegs: 1
 *                         legData:
 *                           -  legId: 30
 *                              legNumber: 1
 *                              positionId: 13
 *                              security: NSE, ONGC
 *                              totalQty: 500
 *                 strategyIdList:
 *                   -  85
 *                   -  86
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             example:
 *               code: BAD_REQUEST
 *               data:
 *                 message: Startegy table not found
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */

/**
 * @swagger
 * /strategyAnalyzer/search:
 *  get:
 *    tags:
 *     - Strategy Analyzer
 *    summary: searches strategies
 *    description: Searches strategies based on query field and value
 *    parameters:
 *      - in: query
 *        description: which field to search on
 *        name: field
 *        schema:
 *          type: String
 *      - in: query
 *        description: value of that field
 *        name: value
 *        schema:
 *          type: string
 *      - in: query
 *        description: pageNumber to search
 *        name: pageNumber
 *        schema:
 *          type: integer
 *      - in: query
 *        description: entries per page
 *        name: entriesPerPage
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 analyzerObject:
 *                   -  error: null
 *                      data:
 *                         strategyTemplateId: 70
 *                         strategyTemplateName: Template_without_algo_exec
 *                         id: 85
 *                         strategyName: Strategy_without_algo_exec
 *                         numberOfLegs: 1
 *                         legData:
 *                           -  legId: 29
 *                              legNumber: 1
 *                              positionId: 12
 *                              security: BSE, HDFC
 *                              totalQty: 500
 *                   -  error: null
 *                      data:
 *                         strategyTemplateId: 70
 *                         strategyTemplateName: Template_without_algo_exec
 *                         id: 86
 *                         strategyName: Strategy_without_algo_exec
 *                         numberOfLegs: 1
 *                         legData:
 *                           -  legId: 30
 *                              legNumber: 1
 *                              positionId: 13
 *                              security: NSE, ONGC
 *                              totalQty: 500
 *                 strategyIdList:
 *                   -  85
 *                   -  86
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             example:
 *               code: BAD_REQUEST
 *               data:
 *                 message: Startegy table not found
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */

/**
 * @swagger
 * /strategyAnalyzer/button:
 *  post:
 *    tags:
 *     - Strategy Analyzer
 *    summary: performs the action and returns the state
 *    description: places the necessary requests on button press and returns the state after placing the request
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *                buttonType: PAUSE
 *                strategyList:
 *                  - 220
 *                  - 235
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *               220:
 *                 status: PAUSE_OFF_IN_PROCESS
 *                 enablePause: false
 *                 enableResume: false
 *                 enableSquareOff: false
 *                 enableClose: false
 *                 enableModify: false
 *                 enableManualOrder: false
 *               235:
 *                 status: PAUSE_OFF_IN_PROCESS
 *                 enablePause: false
 *                 enableResume: false
 *                 enableSquareOff: false
 *                 enableClose: false
 *                 enableModify: false
 *                 enableManualOrder: false
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             example:
 *               code: BAD_REQUEST
 *               data:
 *                 message: INVALID ACTION
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */

/**
 * @swagger
 * /strategyAnalyzer/finish:
 *  get:
 *    tags:
 *     - Strategy Analyzer
 *    summary: finishes the in process strategy
 *    description: finishes the in process strategy
 *    parameters:
 *       - in: query
 *         name: strategyId
 *         schema:
 *           type: integer
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 status: PAUSED
 *                 enablePause: false
 *                 enableResume: true
 *                 enableSquareOff: false
 *                 enableClose: true
 *                 enableModify: true
 *                 enableManualOrder: false
 *      '400':
 *         description: Bad request.
 *         content:
 *           application/json:
 *             example:
 *               code: BAD_REQUEST
 *               data:
 *                 message: NOT AN IN PROCESS STRATEGY
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */

/**
 * @swagger
 * /security/lotSize:
 *  post:
 *    tags:
 *     - Strategy Builder
 *    summary: Gives the lot sizes for given dataFeed Tickers
 *    description: Gives the lot sizes for given dataFeed Tickers
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            example:
 *              dataFeedTickerList:
 *                 - HDFC21AUG2750CE
 *                 - HDFC21AUG2850CE
 *    responses:
 *      '200':
 *        description: successfully returned
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                  HDFC21AUG2750CE: 300
 *                  HDFC21AUG2850CE: 300
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */

/**
 * @swagger
 * /strategy/pricingFunction:
 *  get:
 *    tags:
 *     - Strategy Builder
 *    summary: returns the pricing functions for making strategy and preview
 *    description: returns the pricing functions for making strategy and preview
 *    responses:
 *      '200':
 *        description: Success
 *        content:
 *          application/json:
 *            example:
 *              code: SUCCESS
 *              data:
 *                 array of pricing functions
 *      '500':
 *        description:
 *        content:
 *          application/json:
 *             example:
 *               code: SERVER_ERROR
 *               data:
 *                 message: Server error
 */
