// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { NavbarProps } from '../../src/components/Navbar';

type Data = {
  homepage: {
    navbar: NavbarProps;
  };
};

export default function homePage(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(
    JSON.stringify({
      navbar: {
        desktopNav: {
          sections: [
            {
              title: 'Pa menuen',
              subsections: [
                {
                  name: 'Pa menuen 1',
                  value: {
                    title: 'feature',
                    items: [
                      {
                        name: 'menuLink Pa menuen',
                      },
                      {
                        name: 'menuLink Pa menuen',
                      },
                      {
                        name: 'menuLink Pa menuen',
                      },
                    ],
                  },
                },
                {
                  name: 'Pa menuen 2',
                  value: {
                    title: 'feature2',
                    items: [
                      {
                        name: 'menuLink Pa menuen 2',
                      },
                      {
                        name: 'menuLink Pa menuen 2',
                      },
                      {
                        name: 'menuLink Pa menuen 2',
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: 'McCafe',
              subsections: [
                {
                  name: 'McCafe 1',
                  value: {
                    title: 'feature',
                    items: [
                      {
                        name: 'menuLink McCafe',
                      },
                      {
                        name: 'menuLink McCafe',
                      },
                      {
                        name: 'menuLink McCafe',
                      },
                    ],
                  },
                },
              ],
            },
            {
              title: 'Job & Frentid',
              subsections: [
                {
                  name: 'subSection',
                  value: {
                    title: 'feature',
                    items: [
                      {
                        name: 'menuLink Job & Frentid',
                      },
                      {
                        name: 'menuLink Job & Frentid',
                      },
                      {
                        name: 'menuLink Job & Frentid',
                      },
                    ],
                  },
                },
              ],
            },
          ],
        },
        mobileNav: {},
      },
    })
  );
}
