import React, { FunctionComponent, useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import Button from '../../button/Button'
import { MicrophoneIcon } from '@heroicons/react/24/outline'

const Dictation: FunctionComponent = (props: any) => {
  const {
    transcript,
    listening,
    resetTranscript,
    isMicrophoneAvailable,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition()

  const [initialValue, setInitialValue] = useState('')

  function listen() {
    resetTranscript()
    setInitialValue(props.value)
    SpeechRecognition.startListening({ continuous: true })
  }
  function ignore() {
    SpeechRecognition.stopListening()
    props.setValue(`${initialValue}${transcript}`)
    setInitialValue('')
  }

  useEffect(() => {
    if (listening && transcript !== props.value) {
      props.setValue(`${initialValue}${transcript}`)
    }
  }, [transcript])

  if (!browserSupportsSpeechRecognition) {
    return <></>
  }
  if (!isMicrophoneAvailable) {
    return <>DE</>
  }

  return (
    <div className='flex flex-col h-full p-2 space-y-2'>
      <div className='relative flex'>
        {listening ? (
          <span className='animate-ping absolute inline-flex top-0 left-0 h-full w-full rounded-full bg-rose-400 opacity-75'></span>
        ) : (
          <></>
        )}
        <Button
          onClick={listening ? ignore : listen}
          shape='circle'
          size='xs'
          intent={listening ? 'destructive' : 'default'}
          className={`p-1 active:text-white relative rounded-full ${
            listening
              ? 'bg-red-400 active:bg-red-600 text-white animate-pulse'
              : 'bg-slate-100 active:bg-slate-600 '
          }`}
        >
          <MicrophoneIcon className='h-3 w-3' />
        </Button>
      </div>
    </div>
  )
}

export default Dictation
