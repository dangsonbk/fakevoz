class UserMeta {
    constructor(display_name: string, photo_url: string) {}
}

class UserMetaFull {
    constructor(
        id: string,
        username: string,
        display_name: string,
        title: string,
        photo_url: string,
        date_joined: string,
        is_legacy: boolean
    ) {}
}

class UserMetaJson {
    constructor(
        title: string,
        username: string,
        legacy_id: number,
        date_joined: string,
        avatarrevision: number
    ) {}
}

class Box {
    constructor(key: string, title: string) {}
}

class PostLite {
    constructor(
        id: number,
        title: string,
        thumbnail: string,
        description: string,
        total_comments: number,
    ){}
}
export class VozThreadLite {
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

export class VozThreads {
    count:number;
    next: string;
    previous: string;
    results: VozThreadLite[];
}
export class VozThread {
    id: number;
    legacy_id: number;
    created: Date;
    modified: Date;
    title: string;
    slug: string;
    content_type: number;
    content: string;
    raw: string;
    user_meta: UserMetaFull;
    status: number;
    hashtags: Array<String>;
    total_comments: number;
    box: Box;
    user_meta_json: UserMetaJson;
    is_subscribed: boolean;
    next_post: PostLite;
    previous_post: PostLite;
    is_featured: boolean;
}

export class VozThreadComment {

}