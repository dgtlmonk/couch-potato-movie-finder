const LoginSvc = {
requestLogin: async () => {
    return {
      status: 200,
      metadata: {
        message: 'Access Granted',
        user: 'chuck',
        permission: 100
      }
    }
  }
}

export default LoginSvc