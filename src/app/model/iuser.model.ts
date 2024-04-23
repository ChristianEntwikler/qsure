export interface IUserDto {
    name: string,
    username: string,
    mobileno: string,
    email: string,
    defpwd: string,
    status: string,
}

export interface IUserLogDto{
    userid: number,
    requesttype: string,
    description: string,
    createAt: string,
    updatedAt: string,
    status: string,
}

export interface IRoleDto{
    name: string,
    description: string,
    status: string,
}