describe('Explicit assertions', () => {
  it('How to perform explicit checks', () => {
    cy.visit('/commands/assertions')
    
    cy.get('.table.table-bordered.assertion-table tr').eq(3).then( tableRaw => {
      expect(tableRaw).to.have.attr('class');
      expect(tableRaw).to.have.class('success');

      expect(tableRaw.attr('class')).to.eq('success');
      expect(tableRaw.attr('class')).to.equal('success');
      expect(tableRaw.attr('class')).to.equals('success');

      expect(tableRaw.attr('class')).to.eql('success');
      expect(tableRaw.attr('class')).to.eqls('success');


      const obj = {
        name: "Dima",
        key: {
          key2: '1'
        }
      }

      const obj2 = {
        name: "Dima",
        key: {
          key2: '1'
        }
      }

      expect(obj).to.eql(obj2);
      expect(obj).to.eqls(obj2);

      // expect(obj).to.eq(obj2);
      // expect(obj).to.equal(obj2);
      // expect(obj).to.equals(obj2);

      const obg3 = obj;

      expect(obj).to.eql(obg3);
      expect(obj).to.eqls(obg3);

      expect(obj).to.eq(obg3);
      expect(obj).to.equal(obg3);
      expect(obj).to.equals(obg3);
    })


    cy.get('.table.table-bordered.assertion-table tr td').eq(3).then( cell => {
        expect(cell).to.have.text('Column content');
        expect(cell).to.have.html('Column content');
        expect(cell).to.contain('Column content');

        expect(cell.text()).to.contains('Column content');
        expect(cell.text()).to.include('Column content');


        expect(cell).to.not.have.text('12312313');
        expect(cell).to.not.have.html('123123');
        expect(cell).to.not.contain('123123');
        
        expect(cell.text()).to.not.contains('123123');
        expect(cell.text()).to.not.include('123123');
    })
  }) 
})