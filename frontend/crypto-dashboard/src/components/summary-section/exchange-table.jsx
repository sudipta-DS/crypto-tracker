function ExchangeTable() {
  return (
    <div className="crypto-table">
      <table className="table table-borderless text-center">
        <thead>
          <tr>
            <th>
              <h4>
                <span>#</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Platform</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Last Traded Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Buy / Sell Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Difference</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Savings</span>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h4 className="table-text">1</h4>
            </td>
            <td>
              <a
                target="_blank"
                href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn"
              >
                <h4 className="table-text">
                  <img
                    src="data:image/png;base64,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"
                    className="exchange-logo"
                  />
                  <span className="exchange-name">WazirX</span>
                </h4>
              </a>
            </td>
            <td>
              <h4 className="table-text">₹ 52,03,500</h4>
            </td>
            <td>
              <h4 className="table-text">
                <span>₹ 52,00,000 / ₹ 52,03,500</span>
              </h4>
            </td>
            <td>
              <h4 className="table-text profit">2.90 %</h4>
            </td>
            <td>
              <h4 className="table-text profit">▲ ₹ 1,46,826</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="table-text">2</h4>
            </td>
            <td>
              <a target="_blank" href="https://bit.ly/2BJxccc">
                <h4 className="table-text">
                  <img
                    src="/static/media/bitbns.dcee6cf4.png"
                    className="exchange-logo"
                  />
                  <span className="exchange-name">Bitbns</span>
                </h4>
              </a>
            </td>
            <td>
              <h4 className="table-text">₹ 49,86,753</h4>
            </td>
            <td>
              <h4 className="table-text">
                <span>₹ 49,45,000 / ₹ 49,86,760</span>
              </h4>
            </td>
            <td>
              <h4 className="table-text color-red">-1.38 %</h4>
            </td>
            <td>
              <h4 className="table-text color-red">▼ ₹ 69,920</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="table-text">3</h4>
            </td>
            <td>
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAq1BMVEX////peRXocgDodADocQDobwDpdw7pdgnpdwDnbAD//fv//Pnxr4XnagD87+f87+X99Oz2zbD528b30rj87eDzvJX65NTytIn1yKjvnmL64tDqfh3++PPumVrnZgDwqXXsjD/rhzX0wZ3wp3Lqgiv41r/sj0f53Mjtk0/sjD7vomrrhS/xrX7qfxj2yqzunF3xrHDumlHlWwDulUrvpHPrhCTzuYnrhjn2yKI8Kw2FAAAU7klEQVR4nN1daYOiOrOGhIStbVFWBTdUVMT2zJ23z8z//2U3ARdU1AIR7fN8mMVugYeq1JZKIggvga1slP5rbt0EPj8/haDd1l79HM/C5xIhvDJf/RhPRGeyHcgyHmy3rmn9B+WozZNfk4koiowkQkixXv1ANSOwKcGUigf8xxhq4beUY5cy7Bqvfqp6oFlOW+isCKWyLDOSXEGRJElEjZxXP1sd0N2ZghWfMKy2295vBU2/TNOcm535z1dSYzGfz32VIMVfTb8cZjqteeefjrtmIlTCVz/dowjmyVptDSV/kHgLS2fk4v8tFSIhjDAfjnT4s6Maw/ZbLT8O+5/6/qMRwXJmYNh4xGTTeeXzPYyQDr/t/o7cp5uSmUs7fpvN5nfSCV75fA8isCatXk4FLUwGhmAkiGJmRSWsX//qj0C/8+3N2/lPFkuKVTwks6iXhGa3fe2bPwRaz8zrn5GEIxURJUpMp28Yxk+X3znmsU/U1iQxPzXBipTNRum9+pHqhTtsqUsvdeuBlZDeaDS1Gdwvs9v/b4Rrnr1gTt7ohFhRCRZljHEasCGJEJVsfo/YgP0hCdSNx/QGzMmLRWBOERE2Qj/+9o0352l9rK+GJx6RC+kdwXkq0cjrv28QHuJWdO1nXrH4LuXJtBcv528pynakoqTwyfTtbxFIcCdNJLqn2YbVmb/avQSJJCXXzOISl+GXihKpKy93uTFLS+xXctRCqkqLKz9cTGf3Ka1ZNnw6UKmE40PM8EmpKE266b8DIWg8lHXGLZrMi38WdBFEgr74bziQzn4VS7PRzux0EWWC7bH/tWfukjZrjJxEbE2LNagdRiJUQ/+EltGZ+qcfMsMz7mgZRXYhjFfTGVbDcV/oJ80IUvsM7BZRCuu6mrlS0T0XkSODCN6O/MvPJWRzMsGAc6SYEp5FT4dJIwSFaYsgOi1KEgLbJ7SAyE3IxQJHSsqx30NpTWDWNQZxT1l0w+dnJwkRRVLk5C3XR3QnmtKGtIij3+OW1Z0QfknZJ4mNNy3p6bM6HkvW1QIN7faUHT+RTOyktCgLQPGGD3XNU7IX5iuK4yH65EqyxyV4XigLuokv7cSGszraAD4Yb0D2u5yjEe+Un4o9mf3xjEjAcKfp36mK2qc/s1Ysd9jLjLhzPnx05VFyO0pEXfJ7zP1dgMRfHJXUTc2qarhKFnyOGEE1laDd22uqpxzFRSU3/aE7flCE/myyH8qoxyUWJDiv+LJfq3f0RIS57htLtJdgMlxl8ZWzlI78yJqHAMZAwo8OQ3lwDPvw2l4wvbDW+YtSZezWxU8fSBRxR9Sf4R1BfTC0uUsO5oOj86Nkkoq1w/39w4YGJ0a0vwjzmlyFzvQCD2oiGHBe8icLNYcshiKj9KMJE2AQb1Qpp6A0rYu2l4RSLEWXXrwsRSl/CYm94tGZD0JXYsayWPPAKRbSVyj7fAwGa4URdL5RTlAYZQPji1cp/K0pRHW4izzFgSFYg9N8TPLqIOjyYYZYgG8TRjCNJ35NmKZaOfvC3nevnwZZU5Us7QXjb0piIXhJH+1RiiKesTHwcfodtQaKhkL5qGZMEXu6LGDS+RDsHTWGqr3MsBmiOs7+ZQ0JOatgUF6XkTaTXmzb9hdDx8YnU8L3QKVYF6Ynisof7FEsNvytJe0IMU90NNC6d/R3eHZIEpPf+385lmXEe4pplWL14S3OgpF2PPGzAhyMKBYX2qkNo3H8+TDHkLS6+lBmNvuYfneUoxKinjVeH37CkqHxNv1Xf+fQGL1Z7DlXoxDdcrruGOZeKDI9ciJFrHYfZij051w38PjwjPo0NyOPp8LymNToEiIqr2w72+x3MJkkfUCM1RWRDCFJQis+GYvUryNK/ZJEujnknvoyfwvKbNAxitMU6rttwYkzw45J3AWGkEay3BCAthJTGJ+NxcenIhlBrDAWRmpo9MnJDdBxcFpfbY0Mu4LVy/jJalzq/WqOvVbvpl3MC65ObBglj1LsSqLEFS+QCRvVjnJqItHBYAfh/4WCYQhJ+pQsDllW0B8nxnc4Usm0Tn0GVR5LijWfki+uagNkG7p7rkgHhv9OjS8eCKz57TEa2xUjjvYI34naiW2eFa+mDzFst9JITegMl8cc5kRpMnxqup0kI8oeD6HpI8mNE10JF/aQBmcxIXks0fgecQ9vkmkgrC41KJu15q0k7bGEuYphkjxq3sI71Z7zn+LRQ7dL3WC7xSL5RUGcJUfMyCYDTfibZRkyiWsoFVnf5Qo9ag3ZYkc/idSOQGkS0x+T9OWiqJ7kW++VilrppPKdtJy9cAqHh8T9yDRNo5Do1xLtp0hIGYq4V3FkGKucrxkUiVAaCZpJU/8guUadJWm3HMVqFTjdz9nhTtEdUSxoq9SDYKWmhPQAl5RJPaoli5F/jLkstejNRUKQ1lNkKa5/gtOdrOAMqVjhAczhsT2kvyl6n4qhbzhBPK4hxC9CH66qUoV2RzrYJ19ttzC9Qa5gc5tHait7XaCEwVHK14k7+4wwKG6oQLiz5n+3vupllYcGdxuo2nv2uPq1C8cgtU1f5j7wiQR55RJMUQaZ8sBJ8vrcHna4uyvwE3ipG35axHn2XFB8J0wtJ0RPkcj2+F89VgJhTgoIUj/QUgkq16by60MMlSIgjeqolIUH+/85oyA2hI5SZGQkT+OpMKUNdDNr0L4OdHeOuM2vhA5a2ucDTJ8UpWvUN6J0jr2RhnsD6vrxvZbANC5T979lDPmf0yIVwSTmn6OooRYQDzgU8R0hOpyMvNR3wUHMQza9yB/h2OOzGfh5bvAM+hooRHJbiEkaf/W+s6E1R9yDhkUiJN0OyrKKpmACHf/tXFj30xcl4+VowIbX1hN0yyx6d3TNc2HqN0WPAzrlim6Z0/n+PVGMN8zsaMLgSixj/mHEpUaXTLShlf9bQsz8etqPRje6YgpWq/g12TwYxajZdUtzoMeQb0xk5C6BwmStZWPwQjvomlukStXQhzCCUUTXrcP8OJipbw29rGPEH51TpGP+eX3lCihGsMiGzq6mGL+OVNCXS/qCxqftzYKmM1mUnhpsF2NeGFtdglxbSN3OOVUaUTRn7oKN26RQN5RXdCwHMDWVr3UwxPnvU6bO2oSKcjwpzHwb9IQ5uDA9JcUOwzz7Nh1Hqf8/J/jNtVZ5zYqQwjQV+v6NCyW/Eew+WESvhDkf+TFIT+mm6ALF1d4LalkvaDMJxSnmLWZAAli3XGGN/6Q75Fq3Dx5Ff7mvf8kCrdFEh3Y8FqqpDRjE8jILxNFL1rc4LfdKHnABuir4fuGkyxl48rWVRfnqGpmnwuH9EBbQYRRYU4iCs3SQZ4vkScXfe2hzA74Eqal06fRBpWWUpJ1RjSZNefgj3jcHYViQ6kOGIZVCHTedNOWxZO82gHUW/THDs6ircFLiFLK/SIOKCrXzmuDxFQJFpdsiabROZzGc+0pKZ4YQ+LRq6bwOBCS+MgVWAPX0OYvD6xOkwd6SitILl0LaM/bHCqKndO2dPKcOaFrmDNuZT3wZgtYCZjKYrTG9/GjKR93X4hnOkOX26KV7kqx7oBHFgVr5KWlAQEt5gyVj+Nqdj8xWW9AAVpHp2jbP0AB8JV0m46AXxTOHJ1VtkNFgIuyEOS0FVFvphLkXfUVfq6SCPmNquoCoqbzUchMOACVNJ0FH6EVB9xH2WEh91n1Q8n3w+fo34BvckrJ3V0Pn+EMIugEwD0ZfucZXiLtnF+4Skfy+cfdGsLCBKZSUyw8699P7lOGCkOaLpOcIodF3rue07QJ8hc9lOKzeHlcbwmEAk+ExBYpVQGooR3y3rtEbbLA2H+rAzSjQvh5Y2I538dt1t6xVRp/JUABoHXvmfQcFaL4DvSitv0Qb2YJmgp55bzR+GENhLQojUAJ1KOqClPpeA0CD6PnaeXn+yjPva56w+pzyNhvkhGTmgSLTQ54HM0zy5F02yVsQiieQR6Z/dlFbUf99AR5eeVMXAhW4yPgwUwpk+LoK2zmwCxuHP5fh5MsAPTFd/1SG01gYw6a709J+MIKJ/I0YJliHlfZpGmRaNnCu48G1UzUiVG1QlEL9XWBqAW3p2zD0SPwviOHO0iTOT5OhR5Ygj78LvTvfP47hnKz+gc0Ep3X9BP04hl2ygskw66v5UDsggm/F0Aflh8wh8kjzAwP3AnonhhKwTTHt+vmALtUkz19zAESXEKOwuf7ymXkfJpjh+3j8LlGMNmj3G6kcw7c5OYUxDGBx244hsAf+Rb16BeAMDdAMW8YQAdcwNrfw4B6+yATYpLiTIXA/p3QfpbeAR1Y6TPHKjcMHloPXDI/8D5oPlWIoSu9SqPkgLqwJsyxD8i5l74SEPdjqkpIMH9w/pD78Jias9assQ5G8yXbbE+IAc9qyDN/FIypKW3vKOHxRZ/AFjNZaN57DEL1+AphjoS6zdZL1MySv3gE+Q0ed8qUuT2D4Li5/RGxga1uWPcGy5RTo1dwyrJlj3sL8YcoQ0Idx+P03mMXnrezYEQpXKp2DTmzOEOhZON4jQwyRYrVBlZfdkoRgBt7j5j2yiykW9Wt7o5497867AYNY/k78dwhqlngNfOZ9hAKb5M6+8g5qOpIGsGEool1lCeg8OV7cW5ph1LKgTcK7DTsMUCtjBukNEqgogXrDQ09UiT2bb6whbgjBFH8LEWz28LAvLnANeAq8vXX7BrBQRaVwo46CZ/3Yfwl6JlMK6cVp8IzKv7qwIOXYr90ttT8hGrzy/MJAYhkObOIpN9FSwphyYOWFDWBdIkraBvagx35tCx6ZZqhjH/SKSDBODNi6p1wnXgAzTUe8zi1qClUsaCUxN5Oklz305s42Ps+DibD7AVQ5kt/h5FdJIb5sVclKVgo3BCrAqesuUcnIvl20UroBmBKdgPpMxPMldvD0YodXbDhQKtFjj/i//FeBkezxLDX0pb9gEsNFV1cOXuJspStMiPiw6y0ZxM2vDmJejQBW9+wZnpavIU5fxlI/2f1e53vTfGf7ShYV4HyFeLnl7v01F3Js43WQ/R53po33LaSbGJcIv8482v3YlEaujMdONtilUEcNF20gK5VzuKwp3Y9r+H7WONq9CmR2h83O63MzM4EzvFzjMwfmXEsziwqluRU1KUV+ImkJSyqKl7YeVMvwMTGTLGoiYaOhG7BwcZBEwTQZRIh00MHRfrNP1OQaE62MsxevzMhDKnRk8flX0HanzNRxvAsUwD2+jg9aVNn1AELMgj19gAk/G4+ipkoacakN9q/N5eoQRdjtvRNYZrJh4xGNG6m92SUJXtsiCLKPrTzO/z6W0aQBitxEfJchSGfFF4IJMd0uUU/taKc3UBvQ0zIl6wxX93QEzehgXmrrSbuCebcBl7Etm9sdVgNdAiJEecIoWmIqO91tINmHWMBTXN36Mi0oAygqoRU4aUu04T1fhMCdEnO4uWk5ZM82dgnSmjU2k/hF5HLHfd7eIagNVPnmWtz08XJark52Z6Y6hJXqrm6BWjuc30lJhnd60zToptmT34nZgKZ2sHzvDLZzXNmd9QDgUj2RypgoT7ekX6XNjEjH9y5axjhLa5ZeaM+Lar5I+TOF0f0BNC0xUSMj143GA/sp5dN+jPzSDPEA8MKhh2VkV8QylZGyrX9S8UssG8uIu2107iIoc07WnihK0ndn9OuqFCd3jgcsBrCVomTFIAMSQ88eE4J6nTpIOsUb+t8B1ItBi/ynoLtji5mN7XkPKy2wMnYGFWoQOuWN9AkwUqJp+FBVHF6+z98XHoh0KulIHvwM7vgBdQVug3CKVgmbXngOYFlUPJCQoTupcn+pVAvFl1TFlJ2B4kpHQXWjSnYUlywawWd5blIsvbQ2mC9JyUg0gxyVTVarWdQLimXLxr1q/Ji7Kj/qHeDJNbcpljtPOuzCWkcLCFY5y6APPBLkJuQrlb1CuK2yvT2H23xXMty1UARPNDqRM/LH1W5CacUYoxZFhZ5IM0CjpRVWu2H1LQGdOqQImqRqbwjy/1lXs+DkganMtl9xYOQgryH1jrb574RP91Qh+FCHveVXSNPOALJzuptOZ0Xl03ryYDXFGD9OEfCS+1xB6cwMS19cenhZZDB7PLzB90ydndo0uvpT+l50VEOhaFC2x/YCt1pSF7EQjHfEypcX6J/H+Ql8ncqDDK8+h9Ejc6cjpQNhNwLLlZ/qWoxV7hz3AoZXJrz03sgRwkE8wVVHQm0nFIaPZVOHrdOuQG93ql1fVmub/uo+FN7cYwg6IOdSzJQsa+wgtEq2tJziXhbVUS/Odztn4/+9+IjWuw6r5LqMcgxtZWvvE6ciUyNjRZ6cfV7/eeCw+dNi3Iv9dSNNZCiW/CKGeOlYF5shqbX3uOqzyhTvj0PBHhJCNtOuXTAg5Ui7ONVCfiwaLUawrhqGU8C0uNFv64JecNYoRi2ujierCJE0eUpbnaVUlCL0BCXz8gYUJc5cOHTT7a4XPqtt0OlVK/TdSC5ywnWWF1fHkpgqoz7IE5Q+rl2tBnQnFSK4a25ZdyzrEO1oLj4R4LfP5fc3rb/0TxIcNHjuBLstlR2NV0s1cyIN9+LVVxcjUPJ37iA5uaW0fHYznRGVE6NSPG1pCA6WPvbSbV+MQKTsuiqsk/QNlyveV4QN3aiPQ14W61Ti97sHe6Gv9gRxetY5RUqyI++howBlhAfN7FDZL1EyQtdaiY9ZQZBEmMVgNLWcVgdRSbF3IQKzPrlLLe3GWq+DKTSfurutjdH1fMSi0ijaYJVaQRipay/T664b5QTY9DZOHgKeQ3iPYawijJDEdVIz2iO1NdiHm6F6ktDQR0tOZfG5BGgq8u8tGg6+sTI2rV3HitoL9xGslpyoCcV+3PiWDva9EIdKo/sJqm7l0vTFwSr1o/QF7qNwui49e1YH2oObIY6sVA6OrXjXz7Zr8MYfT+y9uonurGi+j1KZgayqtmQ4cT68kRFRWy/cp9mM0NE7UsqMBhZn0eDXr2VVuzCP1Bw/jJdhv/3afTf7yQwTDqTMotieOw8NGHNyohVk+xb7bwXWgsNpP24MDCXHj+KmHUQDOKxwYuzQePQGW/7UiXn3cJomlvyPuutML8f2w1a/yc66bN9mB/i6YJkjxDwEFZmfwdL0bfbwrw02IjitJUrfg95/kJ8gKD7Hb3deu9/7fym6X6pfb8ztAAAAAElFTkSuQmCC"
                    className="exchange-logo"
                  />
                  <span className="exchange-name">Colodax</span>
                </h4>
              </a>
            </td>
            <td>
              <h4 className="table-text">₹ 46,64,329</h4>
            </td>
            <td>
              <h4 className="table-text">
                <span>₹ 46,17,698 / ₹ 51,30,776</span>
              </h4>
            </td>
            <td>
              <h4 className="table-text color-red">-7.76 %</h4>
            </td>
            <td>
              <h4 className="table-text color-red">▼ ₹ 3,92,344</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="table-text">4</h4>
            </td>
            <td>
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAAECCAMAAADNU0JcAAAC91BMVEWBdk+WjW1NPgf7+vlTRRD9/fxXSBVPQAphVCP49/VQQgz+/f3w7+rm5NxOPwlSQw7r6uReUR/5+Pb09PD39vNeUB7g3tTz8u5gUiFlWCno5t9sXzKZkHB0aD58cUn08+/DvqxwZDja18tfUiBNPwhdTx1bTRvAu6f7+/p/dEygmHuim37k4tqwqpLy8e3U0cO6tJ5gUyL8/Pvk4dlVRxOLgV7V0cTs6uXf3dP5+ff29fKIflrp5+F1aT/b2M2knIB+c0v6+vi8t6Lt6+bl49uAdU739/S9t6O1r5jHwrFaTBpuYjWknYHY1MiooYbq6OKUi2pQQQtYShdSRA/19PHt7OfW08awqZFXSRbOyrve29F9ckrm5N3GwbB4bENURRHf3NLu7eh6bkVzaD3Iw7LQzL65s51xZTl6b0Z3a0JcThyEelSRiGbFwa9ZSxlxZTplWCjKxbWzrZZjVibMyLnx8OtpXS+spYxoWy1bThuQh2WUi2vRzsDKxrbc2c5nWyx8cUhpXC5rXjFWSBSrpIrLx7eWjm6PhmSfl3lmWSrMx7irpIt2a0FiVSWyq5Sbk3TSzsHd2s/w7uq8tqG1rpe3sZpURhKdlHZiVSTi4Ne6tJ+3sZvv7umOhWLd2tB5bkStpo3T0MKpoYdZSxiGfFfZ1sqRiGdRQg1kVyebknPBvKni39bCvarj4di4spxvYzePhWPPy7ynn4RyZjvY1clsYDPRzb+Ng2DW0sWakXKlnoKFe1WSiWiJf1vTz8GNhGHPy72Xjm6+uaVuYjaimn14bUTy8eyelnjp5+Cxq5OTiml/dU2ZkXGHfVivqJCqo4mup46VjGzh3tWCeFGpooigmHpzZzzNybquqI+7taB7cEenoIWKgV2Ge1a0rpeIflnX1Mfa18ymnoOhmXyclHWDeVOyrJWBd1DEv62KgFzBu6iDeFLIxLPr6eNnWiu/uqaYj2+2sJmMgl/JxLTDvqujm39tYTTn5d6+uKSdlXfFwK5MPQb///89GSj1AAAA/XRSTlP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8A9k80AwAAEJJJREFUeNrt3WV8VMcWAPBlLdlsZOMCCUmIEhcSSCB4cBIguLu7FHcp7lYoxV1brFCghWKVV3d3e+7vnfnwPoT8kk2uzJm5u/fu7jsf+ytnDn9WZueemdERN451E1vT/G86NyZ4uRe0sihkYHJNgttGABhRqoSBac18lyToswsAADZU8BuYmgC85oIEx8xQGSODeQ1SvgIAaOByBIv7QVXEZfIZGCZW5vnexQiadobq6OLLY9CsfVWe71yK4EwS1Iw5w9kNLDHVeb51IYL0ULCPuW1ZDUpH1MzzlssQDIqA2hFZxmZQscE+z+9chKD5HqgbG6NYDBp+WCuN/keXILBNA6HIaYc3yLxQJ43+vAsQ9F4LwhF4Dmvg20UgjX675gl854BYTAjDGQwXTuWfrHGC2fVBPDpvxRgULhFJ4x+raYKGF0AqepbQG5RNE03j00nDBMEvgHSYv6Y1iNookcZnlQLFGsq29v91xo0PXiwv/2XMk/92qVMfv2ZcWUNagFzkZ9EZpOdIpgm4xFFmUXybG88OyUmoka9eVSUAAKHRn786JiucKbflPsiHcTSNwd5QuTRbmErMXPT8zZkC6ewMnkRo+7TBbZH5g5YCTRg/kjcImyCbZmgBeurWYdIfxbIJGQAAgHeTnXmIt1cq0MWJ6XIGWztTpDFfRvz9m/XfPFcqmagBAMDGd0aF0BH8BrThM1naIL4nVRpzCSVA+HadUSaXpAEA+IzLsMkv+B0F+vA6K2XQx0yZZsowCoCKf//kI59KzgAA9CM3Sa8AmH4BTPjfFTfIyqdOk/SuDID15VsBVJkoDADAv32s+LMC60XAhX+2mMFoIyJNouTnVdv3p9EmojMAgCOb00VGOw7Y0HcUNpjVC5Umwk98TfcrL/o81AYA+phVVoHhXgF86DcJGUz3QabxfiT8wvz9eFQahAEALBlT5y1xCpjiYF2DyT7oLCcFPq9z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"
                    className="exchange-logo"
                  />
                  <span className="exchange-name">Zebpay</span>
                </h4>
              </a>
            </td>
            <td>
              <h4 className="table-text">₹ 51,10,202</h4>
            </td>
            <td>
              <h4 className="table-text">
                <span>₹ 51,20,000 / ₹ 51,00,405</span>
              </h4>
            </td>
            <td>
              <h4 className="table-text profit">1.06 %</h4>
            </td>
            <td>
              <h4 className="table-text profit">▲ ₹ 53,529</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 className="table-text">5</h4>
            </td>
            <td>
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img
                    src="/static/media/zebpay.232215c8.png"
                    className="exchange-logo"
                  />
                  <span className="exchange-name">CoinDCX</span>
                </h4>
              </a>
            </td>
            <td>
              <h4 className="table-text">₹ 53,18,583</h4>
            </td>
            <td>
              <h4 className="table-text">
                <span>₹ 52,67,929 / ₹ 53,18,283</span>
              </h4>
            </td>
            <td>
              <h4 className="table-text profit">5.18 %</h4>
            </td>
            <td>
              <h4 className="table-text profit">▲ ₹ 2,61,909</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ExchangeTable;
