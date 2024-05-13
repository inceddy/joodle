export interface EnrolmentFormData {
    ue: number;
    ifilter: number;
    status: number;
    timestart?: {
        day: number;
        month: number;
        year: number;
        hour: number;
        minute: number;
        enabled: number;
    };
    timeend?: {
        day: number;
        month: number;
        year: number;
        hour: number;
        minute: number;
        enabled: number;
    };
}
