




describe('Fill form and check Toasts', () => {
    
    beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('.theme-preview[alt="Material Dark Theme"]').click();
        cy.get('.menu-title.ng-tns-c141-19').click();
        cy.get('li.ng-tns-c141-23.ng-star-inserted').click();
        

    })

    const dataFillForms = [
        {
            testData: {
                position: {
                    locator: '#nb-option-24',
                    positionName: 'top-righ'
                },
                title: 'tester',
                content: 'Hi Tester!',
                time: '1000',
                type: {
                    typeLocator:'[ng-reflect-value="success"]',
                    typeName: 'success'
                }
            },
            expectedResult: {
                icon: 'checkmark',
                title: 'tester',
                content: 'Hi Tester!',
                color: 'rgb(96, 175, 32)',
                position: 'justify-content: flex-end; align-items: flex-start;'


            }
        },
        {
            testData: {
                position: {
                    locator: '#nb-option-25',
                    positionName: 'top-left'
                }, 
                title: 'tester2',
                content: 'Hi Tester2!',
                time: '1000',
                type: {
                    typeLocator: '#nb-option-35',
                    typeName: 'warning'
                }, 
            },
            expectedResult: {
                icon: 'alert-triangle',
                title: 'tester2',
                content: 'Hi Tester2!',
                color: 'rgb(255, 159, 5)',
                position: 'justify-content: flex-start; align-items: flex-start;'
            }   
        },
        {
            testData: {
                position: {
                    locator: '#nb-option-27',
                    positionName: 'bottom-right'
                }, 
                title: 'tester3',
                content: 'Hi Tester3!',
                time: '1000',
                type: {
                    typeLocator: '#nb-option-34',
                    typeName: 'info'
                },
            },
            expectedResult: {
                icon: 'question-mark',
                title: 'tester3',
                content: 'Hi Tester3!',
                color: 'rgb(4, 149, 238)',
                position: 'justify-content: flex-end; align-items: flex-end;'
            }  
        },
        {
            testData: {
                position: {
                    locator: '#nb-option-26',
                    positionName: 'bottom-left'
                }, 
                title: 'tester4',
                content: 'Hi Tester4!',
                time: '1000',
                type: {
                    typeLocator: '#nb-option-36',
                    typeName: 'danger'
                }, 
            },
            expectedResult: {
                icon: 'flash',
                title: 'tester4',
                content: 'Hi Tester4!',
                color: 'rgb(176, 0, 32)',
                position: 'justify-content: flex-start; align-items: flex-end;'
            }  
        }
    ]
    
    dataFillForms.forEach(dataFillForm => {
        it(`Fill form with title ${dataFillForm.testData.title} and content ${dataFillForm.testData.content}. Check ${dataFillForm.testData.type.typeName} toast icon and position ${dataFillForm.testData.position.positionName}`, () => {
            cy.get('[class="col-md-6 col-sm-12"]:first-of-type nb-select').click();
            cy.get(dataFillForm.testData.position.locator).click();
            cy.get('[name="title"]').clear().type(dataFillForm.testData.title);
            cy.get('[name="content"]').clear().type(dataFillForm.testData.content);
            cy.get('[name="timeout"]').clear().type(dataFillForm.testData.time)
            cy.get('[class="mat-ripple appearance-outline size-medium status-basic shape-rectangle nb-transition"]').click();
            cy.get(dataFillForm.testData.type.typeLocator).click()
            cy.get('[class="mat-ripple appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
            cy.get('[class*="ng-tns-c209-54 ng-trigger"]').then(toast => {
                expect(toast).to.contain(dataFillForm.expectedResult.title);
                expect(toast).to.contain(dataFillForm.expectedResult.content);
                expect(toast).to.have.css('background-color', dataFillForm.expectedResult.color);
                cy.get('[class="toastr-overlay-container cdk-global-overlay-wrapper"]').then(toastPosition => {
                    expect(toastPosition.attr('style')).to.equal(dataFillForm.expectedResult.position);
                })
                cy.get('[ng-reflect-config="[object Object]"] [data-name="Layer 2"]>[data-name]').then(iconPosition => {
                    expect(iconPosition.attr('data-name')).to.equal(dataFillForm.expectedResult.icon)
                })


            })
            


        });
     
    })
    
})