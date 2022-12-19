// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(20),
    },
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(20),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(20),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(50),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
  ],
}
