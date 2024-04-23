export interface IChatDto {
    reqid: string,
    sender: string,
    recipient: string,
    message: string,
    readstatus: string,
    status: string,
};

export interface IChatRequestDto{
    sender: string,
    recipient: string,
};

export interface IChatMsgDto{
    email: string,
}

export interface IChatStatusUpdate{
    sender: string,
    recipient: string,
    status: string,
}