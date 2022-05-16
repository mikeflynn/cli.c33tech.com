// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { default as sumfetch } from './sumfetch';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).filter(cmd => !cmd.includes("_dot_")).sort().join(', ');
  /*
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  */
  return `Welcome! Here are all the available commands:
\n${commands}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'about' to display the intro.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  const about = await sumfetch(args);
  return about;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);
  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const post = async (args?: string[]): Promise<string> => {
  return "Not currently supported."
};

export const meeting = async (args?: string[]): Promise<string> => {
  window.open(`${config.meeting}`);
  return `Opening a window to set a meeting with C33...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  const scripts = Object.keys(bin).filter(cmd => cmd.includes("_dot_")).map(cmd => cmd.replace('_dot_', ".")).sort().join('\n');
  return `${scripts}`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const history = async (args?: string[]): Promise<string> => {
  return "Not currently supported."
};

export const ssh = async (args?: string[]): Promise<string> => {
  return `
The authenticity of host '${args[0]}' (23.75.345.200)' can't be established.
ED25519 key fingerprint is SHA256:2t1SyRaE55f2FkBIsVVTMOuyTjIHkD+U9hToqjIagV4.
Host key verification failed.
  `
};

export const cowsay = async (args?: string[]): Promise<string> => {
  return `
  ______________________________________
 /                                      \\
 | ${args.join(" ")}                    |
 \\                                      /
  --------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
  `;
};

export const msfconsole = async (args?: string[]): Promise<string> => {
  return `
    \\           _    _            _
     \\         | |  | |          | |
      \\\\       | |__| | __ _  ___| | __
       \\\\      |  __  |/ _' |/ __| |/ /
        >\/7    | |  | | (_| | (__|   <
    _.-(6'  \\  |_|  |_|\\__,_|\\___|_|\\_\\
   (=___._/' \\         _   _
        )  \\ |        | | | |
       /   / |        | |_| |__   ___
      /    > /        | __| '_ \\ / _ \\
     j    < _\\        | |_| | | |  __/
 _.-' :      ''.       \\__|_| |_|\\___|
 \\ r=._\\        '.
<'\\\\_  \\         .'-.          _____  _                  _   _
 \\ r-7  '-. ._  ' .  '\\       |  __ \\| |                | | | |
  \\',      '-.'7  7)   )      | |__) | | __ _ _ __   ___| |_| |
   \\/         \\|  \\'  / '-._  |  ___/| |/ _' | '_ \\ / _ \\ __| |
              ||    .'        | |    | | (_| | | | |  __/ |_|_|
               \\  (           |_|    |_|\\__,_|_| |_|\\___|\\__(_)
                >\\  >
            ,.-' >.'
           <.'_.''
             <'

[+] Starting database
[+] Creating database user 'msf'
[+] Creating databases 'msf'
[+] Creating databases 'msf_test'
[+] Creating configuration file '/usr/share/metasploit-framework/config/database.yml'
[+] Creating initial database schema

Nice try, but this is just a web browser. <a href="https://www.kali.org/get-kali/" style="text-decoration: underline;">Download Kali</a>, hacker.`;
};

// Scripts
export const gibson_hack_dot_sh = async (args?: string[]): Promise<string> => {
  return `<img src="/assets/img/hackers.gif" >
  `;
};

export const parrot_dot_sh = async (args?: string[]): Promise<string> => {
  return `<img src="/assets/img/party-parrot.gif" >
  `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██████╗██████╗ ██████╗     ████████╗███████╗ ██████╗██╗  ██╗
██╔════╝╚════██╗╚════██╗    ╚══██╔══╝██╔════╝██╔════╝██║  ██║
██║      █████╔╝ █████╔╝       ██║   █████╗  ██║     ███████║
██║      ╚═══██╗ ╚═══██╗       ██║   ██╔══╝  ██║     ██╔══██║
╚██████╗██████╔╝██████╔╝       ██║   ███████╗╚██████╗██║  ██║
 ╚═════╝╚═════╝ ╚═════╝        ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝

Type 'help' to see the list of available commands.
Type 'about' to see the intro for the site.
`;
};
