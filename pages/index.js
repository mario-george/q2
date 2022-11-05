import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Form1 from '../components/basicForm';
import Form2 from '../components/form2';

// our-domain.com/

export default function form(props) {
  const fp = useSelector((s) => s.fp.formParts);
  const { data } = props;
  console.log(fp);
  return (
    <>
      {fp == 0 ? <Form1 data={data} /> : null}
      {fp == 1 ? <Form2 /> : null}
    </>
  );
}
export async function getServerSideProps() {
  const req = await fetch(
    'https://graduation-sample.herokuapp.com/api/v1/courses'
  );
  const data = await req.json();
  return { props: data };
}
