export interface ICustomer {
    id:            number;
    username:      string;
    name:          string;
    email:         string;
    password:      string;
    avatar:        string;
    isVerify:      boolean;
    ref_code:      string;
    referred_code: string;
    created_at:    Date;
    updated_at:    Date;
}