users = User.create([
                      { name: 'John', email: 'john@gmail.com', password: '123456', password_confirmation: '123456' },
                      { name: 'Jane', email: 'jane@gmail.com', password: '123456', password_confirmation: '123456' },
                      { name: 'Jack', email: 'jack@gmail.com', password: '123456', password_confirmation: '123456' }

                    ])

developers = Developer.create([
                                { name: 'Kell', email: 'kell@gmail.com', phone: '1234567890', city: 'New York', bio: 'I am a developer',
                                  github: 'kell', photo: 'https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
                                { name: 'Said', email: 'Said@gmail.com', phone: '1234567890', city: 'New York', bio: 'I am a developer',
                                  github: 'said', photo: 'https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
                                  { name: 'Said', email: 'Said@gmail.com', phone: '1234567890', city: 'New York', bio: 'I am a developer',
                                  github: 'said', photo: 'https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' },
                                  { name: 'Said', email: 'Said@gmail.com', phone: '1234567890', city: 'New York', bio: 'I am a developer',
                                  github: 'said', photo: 'https://images.unsplash.com/photo-1657214059233-5626b35eb349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MzZ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }
                              ])

bookings = Booking.create([
                            { user_id: 1, developer_id: 1, date: '2021-10-10' },
                            { user_id: 2, developer_id: 2, date: '2021-10-10' }

                          ])
