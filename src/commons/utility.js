export const checkFormatId = (id) => {
    return /\w+@\w+\.\w+/.test(id);
};

export const checkFormatPwd = (pwd) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(pwd);
};
