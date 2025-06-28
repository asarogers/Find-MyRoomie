{
    name: 'slug',
    type: 'slug',
    options: { source: 'title', maxLength: 96 },
  },
  {
    name: 'body',
    type: 'array',
    of: [{ type: 'block' }],
  }
  