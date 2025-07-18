import { ConfirmIcon, GmailIcon, PasswordIcon, UploadIcon, UserIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import Text from '@/components/Text'
import Image from 'next/image'
import React from 'react'

const Register = () => {
  return (
    <div className="flex gap-[60px]">
      <div>
        <Image
          className="w-[610px]"
          src={"/auth.svg"}
          width={610}
          height={700}
          alt="auth"
        />
      </div>
      <div className="pl-[40px] flex flex-col gap-[40px]">
        <div className="pt-[50px] pr-[150px] space-y-[20px]">
          <Heading tag="h1">Create Account</Heading>
          <Text classList="!w-[325px] !text-[22px]">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </Text>
        </div>
        <form action="" className='flex'>
          <div>
            <Input
            classList="!rounded-[25px] mb-[15px]"
            placeholder="Username"
            type="text"
            icon={<UserIcon />}
          />
          <Input
            classList="!rounded-[25px] mb-[15px]"
            placeholder="Email Address"
            type="text"
            icon={<GmailIcon />}
          />
          <Input
            classList="!rounded-[25px] mb-[15px]"
            placeholder="Password"
            type="text"
            icon={<PasswordIcon />}
          />
          <Input
            classList="!rounded-[25px]"
            placeholder="Confirm Password"
            type="text"
            icon={<ConfirmIcon />}
          />
            <Button
              type="submit"
              title="Create Account"
              extraClass="!w-[500px] !mt-[20px] flex items-center justify-center"
              variant="filled"
            />
          </div>
          <label className='cursor-pointer h-[150px]'>
              <input
                className="hidden"
                type="file"
              />
              <div className="w-[150px] relative h-[150px] bg-white flex items-center justify-center rounded-[20px] text-[#3b3b3b] ">
                <UploadIcon/>
              </div>
            </label>
        </form>
      </div>
    </div>
  );
}

export default Register