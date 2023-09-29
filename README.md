# Tutorial Bot Discord

Bine ați venit la proiectul botului Discord creat în cadrul seriei de tutoriale. Acest bot Discord este construit folosind discord.js și bun.sh, și va evolua pe parcursul tutorialelor.

## Limbă / Language / 语言

- [Română](#Română)
- [English](#English)
- [中文 (Chinese)](#中文(Chinese))

## Cum să utilizați acest bot

### Română

Pentru a utiliza acest bot Discord pe serverul dvs., urmați pașii de mai jos:

1. **Pregătirea Botului pe Discord Developer Portal**

   - Accesați [Discord Developer Portal](https://discord.dev) și autentificați-vă cu contul dvs. Discord.
   - Creați o aplicație nouă și dați-i un nume.
   - Navigați în secțiunea 'Bot' și apăsați pe 'Add Bot' pentru a crea un bot.
   - Acordați botului permisiunile necesare, cum ar fi 'Read Messages', 'Send Messages', etc.
   - Sub 'Token', apăsați pe 'Copy' pentru a copia token-ul botului nostru.

2. **Configurare**

   - Clonați acest depozit GitHub pe calculatorul dvs.
   - Creați un fișier `.env` în directorul rădăcină al proiectului și adăugați următoarea linie:

     ```
     BOT_TOKEN=tokenul-botului-dvs
     ```

     Asigurați-vă că înlocuiți `tokenul-botului-dvs` cu token-ul real al botului pe care l-ați copiat din Discord Developer Portal.

   - Instalați dependințele folosind `bun install`.

3. **Rularea Botului**

   - Rulați botul folosind `bun run --watch src/index.ts`.

4. **Utilizarea Botului pe Discord**

   - Invitați botul pe serverul dvs. Discord folosind linkul de invitație generat pe Discord Developer Portal.
   - Folosiți comenzile și experimentați cu funcționalitățile botului pe server.

### English

To use this Discord bot on your server, follow the steps below:

1. **Setting Up the Bot on Discord Developer Portal**

   - Visit [Discord Developer Portal](https://discord.dev) and log in with your Discord account.
   - Create a new application and give it a name.
   - Navigate to the 'Bot' section and click on 'Add Bot' to create a bot.
   - Grant the bot necessary permissions such as 'Read Messages,' 'Send Messages,' etc.
   - Under 'Token,' click 'Copy' to copy your bot's token.

2. **Configuration**

   - Clone this GitHub repository to your computer.
   - Create a `.env` file in the project's root directory and add the following line:

     ```
     BOT_TOKEN=your-bot-token
     ```

     Make sure to replace `your-bot-token` with the actual token you copied from the Discord Developer Portal.

   - Install dependencies using `bun install`.

3. **Running the Bot**

   - Run the bot using `bun run --watch src/index.ts`.

4. **Using the Bot on Discord**

   - Invite the bot to your Discord server using the invitation link generated on Discord Developer Portal.
   - Use the commands and explore the bot's features on your server.

### 中文(Chinese)

要在您的服务器上使用此Discord机器人，请按照以下步骤操作：

1. **在Discord开发者门户上设置机器人**

   - 访问[Discord开发者门户](https://discord.dev)，并使用您的Discord帐户登录。
   - 创建一个新的应用程序并为其命名。
   - 转到“Bot”部分，然后单击“添加Bot”以创建一个机器人。
   - 授予机器人必要的权限，如“阅读消息”、“发送消息”等。
   - 在“Token”下，单击“复制”以复制您的机器人令牌。

2. **配置**

   - 克隆此GitHub存储库到您的计算机。
   - 在项目的根目录中创建一个`.env`文件，并添加以下行：

     ```
     BOT_TOKEN=您的机器人令牌
     ```

     请确保用您从Discord开发者门户复制的实际令牌替换`your-bot-token`。

   - 使用`bun install`安装依赖项。

3. **运行机器人**

   - 使用`bun run --watch src/index.ts`运行机器人。

4. **在Discord上使用机器人**

   - 使用在Discord开发者门户上生成的邀请链接，将机器人邀请到您的Discord服务器。
   - 在您的服务器上使用命令并探索机器人的功能。

## Contribuție

### Română

Dacă doriți să susțineți acest proiect, puteți să vă abonați la [canalul meu YouTube](https://youtube.com/@wolfy01).

### English

If you want to support this project, you can subscribe to [my YouTube channel](https://youtube.com/@wolfy01).

### 中文 (Chinese)

如果您想支持这个项目，您可以订阅[我的YouTube频道](https://youtube.com/@wolfy01)。
