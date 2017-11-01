const Emailregex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default(emails) => {
  const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => Emailregex.test(email) === false)

    // console.log(invalidEmails)
    // console.log(invalidEmails.length)
    if(invalidEmails.length){
      return `These emails are invalid: ${invalidEmails}`;
    }

    return null;
};