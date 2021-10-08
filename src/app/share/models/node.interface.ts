export interface NodeApp {
  title: string;
  url: string;
  status: string;
  blocks: Block[];
}
export interface Block {
  code: string;
  description: string;
}
