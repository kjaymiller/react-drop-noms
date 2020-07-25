import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone'
import './DropZone.css'


const DropZone = () => {

  const onDrop = useCallback((acceptedFiles) => {

    acceptedFiles.forEach((file) => {

    const reader = new FileReader()
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading was failed')
    reader.onload = () => {
    console.log('Uploaded')
    }

  })
  }, [])

  const {acceptedFiles, getRootProps, getInputProps, isDragActive, } = useDropzone({onDrop})
  return(
  <div {...getRootProps()}>
    <div className="drop-container">
    <input className="drop-container" {...getInputProps()} />
    {
      isDragActive ? 
      <h1>Drop it like it's Hot..</h1>:
      <h1>Feed the rodent your files</h1>
    }
      <img src="https://media.giphy.com/media/l3fzNH5k3gX0maobC/giphy.gif" />
    </div>
  <h2>Noms</h2>
    {acceptedFiles.map(m =>(
      <h3>{m.name}</h3>
    ))}
    </div>
  )
  }

export default DropZone;
