import React, { useState } from 'react';

export default function getCookie(){
    const cookies = document.cookie.split('; ');
    const cookieMap: { [key: string]: string } = {};
    cookies.forEach(cookie => {
      const [name, value] = cookie.split('=');
      cookieMap[name] = value;
    });

    return cookieMap;
};