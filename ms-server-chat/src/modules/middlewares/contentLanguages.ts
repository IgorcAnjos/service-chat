export enum ContentLanguage {
  eContentLanguagePtBR = 'pt-BR',
  eContentLanguageEnUS = 'en-US'
}

export const findContentLanguage = (contentLanguageStr: any) => {
  let result = ContentLanguage.eContentLanguagePtBR;
  if ((<any> Object).values(ContentLanguage).includes(contentLanguageStr)) {
    result = <ContentLanguage> contentLanguageStr;
  }

  return result;
};