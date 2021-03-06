import request from '@/utils/request'

/**
 * 用户登录
 * @param data 用户名密码
 * @returns {AxiosPromise<any>}
 */
export function login(data) {
  // 结合了spring security之后必须使用formData来进行登录提交
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })
  return request.post('/login', formData)
}

/**
 * 获取用户信息
 * @param token
 * @returns {AxiosPromise<any>}
 */
export function getInfo(token) {
  return request.get('/userInfo')
}

/**
 * 用户退出
 * @returns {AxiosPromise<any>}
 */
export function logout() {
  return request.post('/logout')
}

/**
 * 获取查询列表
 * @param userVo 用户实体
 * @returns {AxiosPromise<any>}
 */
export const findUserList = (userVo) => {
  return request.post('/system/user/', userVo)
}

/**
 * 创建用户
 * @param tbSysUser 用户实体
 * @returns {AxiosPromise<any>}
 */
export const saveUser = (tbSysUser) => {
  return request.post('/system/user/save', tbSysUser)
}

/**
 * 根据用户id获取用户全部信息
 * @param id 用户id
 * @returns {AxiosPromise<any>}
 */
export const getUserById = (id) => {
  return request.get('/system/user/' + id)
}

/**
 * 根据id更新用户信息
 * @param id 用户id
 * @param tbSysUser 用户实体
 * @returns {AxiosPromise<any>}
 */
export const updateUserById = (id, tbSysUser) => {
  return request.put('/system/user/update/' + id, tbSysUser)
}

/**
 * 根据id删除用户
 * @param id 用户实体
 * @returns {AxiosPromise<any>}
 */
export const deleteUserById = (id) => {
  return request.delete('/system/user/delete/' + id)
}
