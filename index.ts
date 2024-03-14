import { http, createPublicClient } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const address = await client.getEnsAddress({ name: 'calpaliu.eth' })
const name = await client.getEnsName({
  address: '0xdD0EF5299A7fd6801230140b7469f19F28421b64',
})

export default [`Address: ${address}`, `Name: ${name}`]
