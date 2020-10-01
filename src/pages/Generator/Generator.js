import React from "react";
import Layout from "../../components/Layout";
import download from "downloadjs";

export default function Generator({ user, props }) {

  const testJsonData = [
    {'id': '1', 'quote': 'test', 'extra': 'mon-10-05-2020'},
    {'id': '2', 'quote': 'hello world', 'extra': 'abcdef'},
    {'id': '3', 'quote': 'wello horld', 'extra': 'ghijk'}
  ]   
  
  function arrayToCSV(array) {
    if (array.length <= 0) {
      console.error("empty array!");
    }

    let keys = Object.keys(array[0]);   
    let result = keys.join(",") + "\n";
    for (let i in array) {
      const processedIndex = keys.map(k => array[i][k] || "").join(",") + "\n";
      result += processedIndex;
    }
    const csvBytes = new TextEncoder().encode(result);
    const csvBlob = new Blob([csvBytes], {
      type: "application/csv;charset=utf-8"
    });
  
    return csvBlob;
  }
  
  
  const generateCSV = () => {
      const document = arrayToCSV(testJsonData)
      download(
        document,
        `CSVExport.csv`,
        "text/csv"
      );
  }

  return (
    <Layout id="generator" user={user} {...props}>
      <h1>
        Generator
      </h1>

      <button onClick={generateCSV}>
        {`Download CSV`}
      </button>

    </Layout>
  );
}
