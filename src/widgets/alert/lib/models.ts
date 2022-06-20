export type TAlertType = EAlertTypes

export enum EAlertTypes {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    ERROR = "ERROR",
    INFO = "INFO",
    DEFAULT = "DEFAULT",
}
export type TMessage = {
    message: string
    id: string
    type: TAlertType
}
