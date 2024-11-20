export default function UserProfile({params}:any) {
  return (
    <div className="flex flex-col items-center  justify-center min-h-screen py-2">
      <h1 className="text-4xl mb-10 text-center font-bold">Profile</h1>
      <hr />
      <p className="text-4xl mb-10 text-center font-medium">Profile page <span className="text-4xl mb-10 text-center font-bold text-red-600">{params.id}</span></p>
    </div>
  )
}