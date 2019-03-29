class UserMeta {
    constructor(display_name: string, photo_url: string) {}
}

class Box {
    constructor(key: string, title: string) {}
}

export class VozThread {
    id: number;
    title: string;
    hashtags: Array<String>;
    created: Date;
    modified: Date;
    user_meta: UserMeta;
    total_comments: number;
    last_comment_username: string;
    box: Box;
    is_sticky: Boolean;
    thumbnail: string;
    description: string;
}