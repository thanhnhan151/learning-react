export default function App() {
  // NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED
  const USER_STATUS = 'VERIFIED'

  switch (USER_STATUS){
    case 'NOT_VERIFIED':
      return (
        <div>
          <span>
            You are not verified
          </span>
        </div>
      )
    case 'VERIFIED':
      return (
        <div>
          <span>
            You are verified
          </span>
        </div>
      )
    case 'ACCOUNT_DISABLED':
      return (
        <div>
          <span>
            Your account is disabled
          </span>
        </div>
      )
    default:
      return (
        <div>
          <span>
            Please contact the system admin
          </span>
        </div>
      )
  }

  // if (USER_STATUS === 'NOT_VERIFIED') {
  //   return (
  //     <div>
  //       <span>
  //         You are not verified. Please verify your Email or Mobile Number.
  //         </span>
  //     </div>
  //   )
  // } else if (USER_STATUS === 'VERIFIED') {
  //   return (
  //     <div>
  //       <span>
  //         You are verified. Congrats! Click here to Access Your Dashboard.
  //       </span>
  //     </div>
  //   )
  // } else if (USER_STATUS === 'ACCOUNT_DISABLED') {
  //   return (
  //     <div>
  //       <span>
  //         Your account is disabled
  //       </span>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <span>
  //         Please contact the system admin
  //       </span>
  //     </div>
  //   )
  // }
}

