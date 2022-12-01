export type userType = {
    id: string | number;
    username: string;
    discriminator: string;
    avatar: string; //Colocar avatar hash aqui https://discord.com/developers/docs/reference#image-formatting
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string //Colocar banner hash aqui https://discord.com/developers/docs/reference#image-formatting
    accent_color?: number;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number; // adicionar flags https://discord.com/developers/docs/resources/user#user-object-user-flags
    premium_type?: premiumUserType; //
    public_flags?: number;
}

export type premiumUserType = 0 | 1 | 2 | 3