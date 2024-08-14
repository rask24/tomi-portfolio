type MenuItem = {
  label: string;
  path: string;
  isExternal?: boolean;
};

const menuConfig: MenuItem[] = [
  { label: 'ABOUT ME', path: '/about' },
  { label: 'ご依頼', path: '/request' },
  { label: 'お問い合わせ', path: '/contact' },
  { label: 'デザイン', path: '/works/design' },
  { label: 'マンガ', path: '/works/manga' },
  { label: 'イラスト', path: '/works/illustration' },
  { label: 'スケッチ&ペインティング', path: '/works/sketch-and-painting' },
  { label: 'LINEスタンプ', path: '/works/line-stickers' },
  { label: 'アニメ', path: '/works/anime' },
  { label: '映像制作', path: '/works/video-production' },
  { label: '映像編集', path: '/works/video-editing' },
  { label: 'そのほか', path: '/works/others' },
];

export default menuConfig;
