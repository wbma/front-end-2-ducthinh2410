export interface Image {
  file_id: number,
  filename: string,
  filesize: number,
  title: string,
  description: string,
  userId: number,
  mimeType: string,
  time_added: string,
  thumbnails: Thumbnail[];
}

export interface Thumbnail {
  160: string,
  320: string,
  540: string
}
