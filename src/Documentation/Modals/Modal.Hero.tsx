import React, { FunctionComponent, useState } from 'react'

import { Button } from '../../Components/button'
import Conditional from '../../Components/conditional/Conditional'
import { Modal } from '../../Components/modal'

const ModalHero: FunctionComponent = () => {
  const [isOpen, setOpen] = useState(false)
  const [isLoading, setLoading] = useState(false)

  function open() {
    setOpen(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }
  return (
    <>
      <div
        className='p-8 shadow-inner rounded border border-slate-200 relative'
        style={{
          backgroundImage: atob(
            'dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NnIGZpbGw9JyUyM2VlZWVlZScgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00wIDBoNHY0SDBWMHptNCA0aDR2NEg0VjR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0UiKQ==',
          ),
        }}
      >
        <div className=' w-96'>
          <Modal portal={React.Fragment} container={React.Fragment}>
            <div>
              <Modal.Header>
                <Modal.Title title='Contained' hero />
              </Modal.Header>
              {/* <Modal.Content loading={isLoading}>Content</Modal.Content> */}
              <Modal.Footer align='right'>
                <Button variant='transparent' onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button intent='primary' onClick={() => setOpen(false)}>
                  Save
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </div>
      </div>
      <div
        className='p-8 shadow-inner rounded border border-slate-200 relative'
        style={{
          backgroundImage: atob(
            'dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NnIGZpbGw9JyUyM2VlZWVlZScgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00wIDBoNHY0SDBWMHptNCA0aDR2NEg0VjR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0UiKQ==',
          ),
        }}
      >
        <div className='w-96 '>
          <Modal portal={React.Fragment} container={React.Fragment}>
            <Modal.Content loading={isLoading}>Content</Modal.Content>
            <Modal.Footer align='right'>
              <Button variant='transparent' onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button intent='primary' onClick={() => setOpen(false)}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div
        className='p-8 shadow-inner rounded border border-slate-200 relative'
        style={{
          backgroundImage: atob(
            'dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NnIGZpbGw9JyUyM2VlZWVlZScgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00wIDBoNHY0SDBWMHptNCA0aDR2NEg0VjR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0UiKQ==',
          ),
        }}
      >
        <div className='w-96 '>
          <Modal portal={React.Fragment} container={React.Fragment}>
            {/* <Modal.Header>
              <Modal.Title title='Contained' />
            </Modal.Header> */}
            <Modal.Content loading={isLoading}>Content</Modal.Content>
            <Modal.Footer align='center'>
              <Button variant='transparent' onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div
        className='p-8 shadow-inner rounded border border-slate-200 relative'
        style={{
          backgroundImage: atob(
            'dXJsKCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzgnIGhlaWdodD0nOCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NnIGZpbGw9JyUyM2VlZWVlZScgZmlsbC1vcGFjaXR5PScwLjQnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00wIDBoNHY0SDBWMHptNCA0aDR2NEg0VjR6Jy8lM0UlM0MvZyUzRSUzQy9zdmclM0UiKQ==',
          ),
        }}
      >
        <div className='w-96 '>
          <Modal portal={React.Fragment} container={React.Fragment}>
            {/* <Modal.Header>
              <Modal.Title title='Contained' />
            </Modal.Header> */}
            <Modal.Content loading={true}>Content</Modal.Content>
            <Modal.Footer align='center'>
              <Button variant='transparent' onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  )
}

export default ModalHero
