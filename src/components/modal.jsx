/* eslint-disable react/prop-types */
function Modal (props) {
  return (
  <div>{props.isModalActive
    ? <div onClick={() => { props.setIsModalActive(false) }} className="fixed inset-0 bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center shrink-0 " >
        <div onClick={(e) => { e.stopPropagation() }} className="rounded-2xl bg-white text-black w-[85%] h-[70%] px-8 py-6" >
          {props.innerComp}
        </div>
      </div>
    : null}
  </div>)
}

export default Modal
