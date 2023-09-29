# Tutorial Bot Discord

Bine ați venit la proiectul botului Discord creat în cadrul seriei de tutoriale. Acest bot Discord este construit folosind discord.js și bun.sh, și va evolua pe parcursul tutorialelor.

## Cuprins

- [Cum să utilizați acest bot](#cum-să-utilizați-acest-bot)
- [Configurare](#configurare)
- [Contribuție](#contribuție)

## Cum să utilizați acest bot

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

## Contribuție

Dacă doriți să contribuiți la dezvoltarea acestui bot sau să raportați probleme, vă rugăm să faceți o bifă la [probleme](https://github.com/utilizator/proiect-bot-discord/issues) sau să trimiteți o cerere de trage cu modificările propuse. Așteptăm cu nerăbdare contribuțiile dvs. și sperăm că vă veți bucura de acest bot Discord!

