import { PageTransition } from '@/components/PageTransition';

const SizeChart = () => {
  const categories = [
    {
      name: 'Dresses',
      sizes: [
        { size: 'XS', bust: '32-33', waist: '24-25', hips: '35-36' },
        { size: 'S', bust: '34-35', waist: '26-27', hips: '37-38' },
        { size: 'M', bust: '36-37', waist: '28-29', hips: '39-40' },
        { size: 'L', bust: '38-40', waist: '30-32', hips: '41-43' },
        { size: 'XL', bust: '41-43', waist: '33-35', hips: '44-46' },
      ]
    },
    {
      name: 'Skirts',
      sizes: [
        { size: 'XS', waist: '24-25', hips: '35-36', length: '23' },
        { size: 'S', waist: '26-27', hips: '37-38', length: '24' },
        { size: 'M', waist: '28-29', hips: '39-40', length: '25' },
        { size: 'L', waist: '30-32', hips: '41-43', length: '26' },
        { size: 'XL', waist: '33-35', hips: '44-46', length: '27' },
      ]
    },
    {
      name: 'Blazers',
      sizes: [
        { size: 'XS', bust: '32-33', waist: '24-25', shoulder: '14' },
        { size: 'S', bust: '34-35', waist: '26-27', shoulder: '14.5' },
        { size: 'M', bust: '36-37', waist: '28-29', shoulder: '15' },
        { size: 'L', bust: '38-40', waist: '30-32', shoulder: '15.5' },
        { size: 'XL', bust: '41-43', waist: '33-35', shoulder: '16' },
      ]
    },
    {
      name: 'Trousers',
      sizes: [
        { size: 'XS', waist: '24-25', hips: '35-36', inseam: '30' },
        { size: 'S', waist: '26-27', hips: '37-38', inseam: '30.5' },
        { size: 'M', waist: '28-29', hips: '39-40', inseam: '31' },
        { size: 'L', waist: '30-32', hips: '41-43', inseam: '31.5' },
        { size: 'XL', waist: '33-35', hips: '44-46', inseam: '32' },
      ]
    },
    {
      name: 'Tops',
      sizes: [
        { size: 'XS', bust: '32-33', waist: '24-25', length: '24' },
        { size: 'S', bust: '34-35', waist: '26-27', length: '25' },
        { size: 'M', bust: '36-37', waist: '28-29', length: '26' },
        { size: 'L', bust: '38-40', waist: '30-32', length: '27' },
        { size: 'XL', bust: '41-43', waist: '33-35', length: '28' },
      ]
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Size Chart</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your perfect fit with our comprehensive size guide. All measurements are in inches.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.name} className="bg-card rounded-lg p-6 shadow-elegant">
                <h2 className="font-serif text-2xl font-bold mb-6">{category.name}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="pb-3 pr-6 font-semibold">Size</th>
                        {Object.keys(category.sizes[0]).filter(key => key !== 'size').map((measurement) => (
                          <th key={measurement} className="pb-3 pr-6 font-semibold capitalize">
                            {measurement}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {category.sizes.map((sizeData) => (
                        <tr key={sizeData.size} className="border-b border-border">
                          <td className="py-4 pr-6 font-medium">{sizeData.size}</td>
                          {Object.entries(sizeData).filter(([key]) => key !== 'size').map(([key, value]) => (
                            <td key={key} className="py-4 pr-6 text-muted-foreground">
                              {String(value)}"
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-secondary p-6 rounded-lg">
            <h3 className="font-serif text-xl font-bold mb-4">How to Measure</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Bust:</strong> Measure around the fullest part of your bust</li>
              <li><strong>Waist:</strong> Measure around the narrowest part of your waist</li>
              <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
              <li><strong>Inseam:</strong> Measure from the crotch to the bottom of the leg</li>
              <li><strong>Shoulder:</strong> Measure from shoulder point to shoulder point across the back</li>
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default SizeChart;