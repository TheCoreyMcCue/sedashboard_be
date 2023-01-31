export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'guru',
      title: 'Guru Cards',
      type: 'string',
    },
    {
      name: 'batch',
      title: 'Batch Instructions',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'minIn',
      title: 'Minimum Inputs',
      type: 'string',
    },
    {
      name: 'documentation',
      title: 'Documentation',
      type: 'string',
    },
  ],
}
