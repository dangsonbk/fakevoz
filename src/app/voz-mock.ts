import { VozThread } from './voz';

const now = new Date();
export const VOZTHREADS: VozThread[] = [
    {
        id: 11,
        title: 'Có bác nào thích xem bóng chày không ?',
        hashtags: ["a", "b"],
        created: now,
        modified: now,
        user_meta: {},
        total_comments: 150,
        last_comment_username: "dangson",
        box: {
            key:"diembao",
            title:"Điểm báo"
        },
        is_sticky: true,
        thumbnail: "https://www.xemgame.com/imgstore/pictures/xemgame/2019/03/28/Rift-Rivals-2017.jpg",
        description: "Rift Rivals (Khu Vực Đại Chiến) là giải đấu Liên Minh Huyền Thoại tầm cỡ thế..."
    },
    {
        id: 12,
        title: '[Gỗ đá phong thuỷ] Chúng ta đã tốn quá nhiều tiền...',
        hashtags: ["c", "db"],
        created: now,
        modified: now,
        user_meta: {},
        total_comments: 150,
        last_comment_username: "thuyvan",
        box: {
            key:"diembao",
            title:"Điểm báo"
        },
        is_sticky: true,
        thumbnail: "https://www.xemgame.com/imgstore/pictures/xemgame/2019/03/28/Rift-Rivals-2017.jpg",
        description: "Điều kiện có hạn nên nhờ anh em vozer có kinh nghiệm tư vấn giúp một..."
    }
];