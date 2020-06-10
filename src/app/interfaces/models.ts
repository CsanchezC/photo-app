export interface Album {
    albumId: number;
    thumbnailUrl: string;
    photos: Array<Photo>;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
