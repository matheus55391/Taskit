import { NextPage } from 'next'
import { useState } from 'react'
import { setTimeout } from 'timers'

const Login : NextPage = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const handlerLogin = async () =>{
		setLoading(true)
		console.log(username)
		console.log(password)
		setTimeout(()=>{
			setLoading(false)

		}, 1000)

	}

	return (
		<div className='flex flex-col justify-center items-center h-screen bg-gray-900 ' >
			<div className='flex flex-col w-screen bg-gray-900 p-2 sm:p-6 md:w-6/12 lg:w-2/6 xl:w-4/12  text-gray-300 md:bg-gray-800 rounded-2xl h-2/5 text-center mb-12 sm:mb-0 '>
				<h1 className='mb-6 text-3xl uppercase font-bold '>Login</h1>
				<input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" placeholder="Username" className='mb-8 px-4 py-2 bg-gray-900 text-xl font-normal bg-clip-padding border border-solid border-blue-400 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-900 focus:border-blue-600 focus:outline-none'></input>
				<input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" className='mb-8 px-4 py-2 bg-gray-900 text-xl font-normal bg-clip-padding border border-solid border-blue-400 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-900 focus:border-blue-600 focus:outline-none'></input>
				<button onClick={handlerLogin} className='hover:animate-pulse bg-blue-600 mt-auto mb-8 text-white px-6 py-3 font-medium text-sm uppercase rounded shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center justify-center'>
					
					{ 
						loading? 					
							<svg xmlns="http://www.w3.org/2000/svg" className="animate-spin  w-6 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
							</svg>
							:
							<span>Logar</span>
					}

				</button>
				<div>
					<span>Ainda não uma conta? </span>
					<a href='registrar' className="text-blue-600">{' Criar Conta!'}</a>
				</div>
			</div>
		</div>
	)
}
export default Login