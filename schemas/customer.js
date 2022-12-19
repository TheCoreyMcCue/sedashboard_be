export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'about',
      title: 'About',
      type: 'string',
    },
    {
      name: 'contactName',
      title: 'Contact Name',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'vertical',
      title: 'Vertical',
      type: 'string',
    },
    {
      name: 'technicalQual',
      title: 'Technical Qualification',
      type: 'boolean',
    },
    // {
    //   name: 'image',
    //   title: 'Image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    // {
    //   name: 'save',
    //   title: 'Save',
    //   type: 'array',
    //   of: [{type: 'save'}],
    // },
    {
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [{type: 'comment'}],
    },
  ],
}
