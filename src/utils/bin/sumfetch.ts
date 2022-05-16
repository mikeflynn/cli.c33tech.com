import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  return `
               ,,ggddY"""Ybbgg,,                  C33 Technology
          ,agd888b,_ "Y8, ___'""Ybga,             ===================
       ,gdP""88888888baa,.""8b    "888g,          Your source for technical consulting, CTO experience,
     ,dP"     ]888888888P'  "Y     '888Yb,        security knowledge, discussion, and fun projects.
   ,dP"      ,88888888P"  db,       "8P""Yb,
  ,8"       ,888888888b, d8888a           "8,     Contact Us:
 ,8'        d88888888888,88P"' a,          '8,     <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
,8'         88888888888888PP"  ""           '8,    <u><a href="${config.social.github}" target="_blank">${config.social.github}</a></u>
d'          I88888888888P"                   'b    <u><a href="${config.social.linkedin}" target="_blank">${config.social.linkedin}</a></u>
8           '8"88P""Y8P'                      8    <u><a href="${config.social.twitter}" target="_blank">${config.social.twitter}</a></u>
8            Y 8[  _ "                        8
8              "Y8d8b  "Y a                   8
8                 '""8d,   __                 8
Y,                    '"8bd888b,             ,P
'8,                     ,d8888888baaa       ,8'
 '8,                    888888888888'      ,8'
  '8a                   "8888888888I      a8'
   'Yba                  'Y8888888P'    adP'
     "Yba                 '888888P'   adY"
       '"Yba,             d8888P" ,adP"'
          '"Y8baa,      ,d888P,ad8P"'
               ''""YYba8888P""''
`;
};

export default sumfetch;
