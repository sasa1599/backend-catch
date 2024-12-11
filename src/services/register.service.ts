import prisma from "../../prisma";

//customer
export const findCust = async (username: string, email: string) => {
  const userCust = await prisma.customer.findFirst({
    where: { OR: [{ username: username }, { email: email }] },
  });
  return userCust;
};

export const findReferralCode = async (referralCode: string) => {
  const referredUser = await prisma.customer.findFirst({
    where: { ref_code: referralCode },
  })
  return referredUser
}



//promotor

export const findPromotor = async (username: string, email: string) => {
    const userPro = await prisma.promotor.findFirst({
      where: { OR: [{ username: username }, { email: email }] },
    });
    return userPro;
  };