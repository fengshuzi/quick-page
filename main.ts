import { Plugin, TFile } from 'obsidian';

export default class QuickPageCreatorPlugin extends Plugin {
  onload() {
    // 在左侧边栏添加图标按钮
    this.addRibbonIcon('plus-circle', '创建新页面', async () => {
      await this.createNewPage();
    });

    // 添加命令
    this.addCommand({
      id: 'create-new-page',
      name: '在 pages 目录创建新页面',
      callback: async () => {
        await this.createNewPage();
      }
    });
  }

  async createNewPage() {
    // 生成时间戳文件名 yyyymmddhhmmss
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    
    const fileName = `${year}${month}${day}${hour}${minute}${second}.md`;
    const filePath = `pages/${fileName}`;

    try {
      // 检查文件是否已存在
      const existingFile = this.app.vault.getAbstractFileByPath(filePath);
      if (existingFile instanceof TFile) {
        // 如果文件已存在，打开它
        await this.app.workspace.getLeaf().openFile(existingFile);
        return;
      }

      // 创建新文件
      const file = await this.app.vault.create(filePath, '');
      
      // 打开新创建的文件
      await this.app.workspace.getLeaf().openFile(file);
    } catch (error) {
      console.error('创建页面失败:', error);
    }
  }

  onunload() {
    // 清理工作
  }
}
