const SampleData = {
    "pages": [
        {
            "questions": [
                {
                    "_id": "FG1",
                    "order": 1,
                    "value": "What market are you listing your product for?",
                    "type": "checkBox",
                    "pageId": "FG",
                    "answers": [
                        {
                            "_id": "FG1.A1",
                            "value": "EU",
                            "attributes": [
                                "123",
                                "126",
                                "127",
                                "1550",
                                "1152",
                                "1175"
                            ]
                        },
                        {
                            "_id": "FG1.A2",
                            "value": "NOAM",
                            "attributes": [
                                "1694"
                            ]
                        }
                    ]
                },
                {
                    "_id": "FG2",
                    "order": 2,
                    "value": "What sub-category is your product?",
                    "type": "radio",
                    "pageId": "FG",
                    "answers": [
                        {
                            "_id": "FG2.A1",
                            "value": "Dairy, refrigerated",
                            "attributes": []
                        },
                        {
                            "_id": "FG2.A2",
                            "value": "Deli & Prepared",
                            "attributes": []
                        },
                        {
                            "_id": "FG2.A3",
                            "value": "Fresh Meat",
                            "attributes": [
                                "3909"
                            ]
                        },
                        {
                            "_id": "FG2.A4",
                            "value": "Fresh Fish",
                            "attributes": []
                        },
                        {
                            "_id": "FG2.A5",
                            "value": "Fresh Fruit & Vegetables",
                            "attributes": [
                                "165",
                                "166",
                                "1246",
                                "1288",
                                "2145",
                                "2147",
                                "2206",
                                "3519",
                                "3552",
                                "3800",
                                "3909"
                            ]
                        },
                        {
                            "_id": "FG2.A6",
                            "value": "Groceries",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FG3",
                    "order": 3,
                    "value": "Is the product part of a hierarchy?",
                    "type": "radio",
                    "pageId": "FG",
                    "answers": [
                        {
                            "_id": "FG3.A1",
                            "value": "Yes",
                            "attributes": [
                                "199",
                                "200",
                                "202",
                                "203",
                                "1664",
                                "1666",
                                "1668",
                                "1670",
                                "1671",
                                "2180",
                                "2181",
                                "3604",
                                "3607",
                                "3611",
                                "3614",
                                "3616",
                                "3618",
                                "3619",
                                "3620"
                            ]
                        },
                        {
                            "_id": "FG3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FG",
            "name": "Generic Questions",
            "order": "1"
        },
        {
            "questions": [
                {
                    "_id": "FC1",
                    "order": 1,
                    "value": "Is it important the retailer knows the brand owner of your product?",
                    "type": "radio",
                    "pageId": "FC",
                    "answers": [
                        {
                            "_id": "FC1.A1",
                            "value": "Yes",
                            "attributes": [
                                "75",
                                "77"
                            ]
                        },
                        {
                            "_id": "FC1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                },
                {
                    "_id": "FC2",
                    "order": 2,
                    "value": "Do you wish to communicate the owner of the manufacturing process to the retailer?",
                    "type": "radio",
                    "pageId": "FC",
                    "answers": [
                        {
                            "_id": "FC2.A1",
                            "value": "Yes",
                            "attributes": [
                                "91",
                                "93"
                            ]
                        },
                        {
                            "_id": "FC2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FC3",
                    "order": 3,
                    "value": "Do you wish to communicate to the buyer the contact's postal/physical address for business processes or consumer information?",
                    "type": "radio",
                    "pageId": "FC",
                    "answers": [
                        {
                            "_id": "FC3.A1",
                            "value": "Yes",
                            "attributes": [
                                "123",
                                "126",
                                "127"
                            ]
                        },
                        {
                            "_id": "FC3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FC4",
                    "order": 4,
                    "value": "Do you wish to communicate to the buyer the contact's means of contacting for business processes or consumer information?",
                    "type": "radio",
                    "pageId": "FC",
                    "answers": [
                        {
                            "_id": "FC4.A1",
                            "value": "Yes",
                            "attributes": [
                                "134",
                                "135"
                            ]
                        },
                        {
                            "_id": "FC4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FC",
            "name": "Contact Details",
            "order": "2"
        },
        {
            "questions": [
                {
                    "_id": "FI1",
                    "order": 1,
                    "value": "Do you wish to communicate additional product identification apart from the GTIN (e.g. PLU)?",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI1.A1",
                            "value": "Yes",
                            "attributes": [
                                "68",
                                "69"
                            ]
                        },
                        {
                            "_id": "FI1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FI2",
                    "order": 2,
                    "value": "Is this product substituting, (temporarily) replacing, equivalent to, another product you are listing with the retailer?",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI2.A1",
                            "value": "Yes",
                            "attributes": [
                                "115",
                                "116"
                            ]
                        },
                        {
                            "_id": "FI2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FI3",
                    "order": 3,
                    "value": "Do you know the classification of your product based on an alternate classification scheme to GS1 GPC?",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI3.A1",
                            "value": "Yes",
                            "attributes": [
                                "171",
                                "173"
                            ]
                        },
                        {
                            "_id": "FI3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FI4",
                    "order": 4,
                    "value": "Do you communicate the classification system used by customs to apply tariffs on your product?",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI4.A1",
                            "value": "Yes",
                            "attributes": [
                                "2776",
                                "2777"
                            ]
                        },
                        {
                            "_id": "FI4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FI5",
                    "order": 5,
                    "value": "Do you provide additional variants to help define the product? (e.g. colour, style, fragrance)",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI5.A1",
                            "value": "Yes",
                            "attributes": [
                                "3504"
                            ]
                        },
                        {
                            "_id": "FI5.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FI6",
                    "order": 6,
                    "value": "Do you provide the buyer a short product name for the shelf tag and POS receipt?",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI6.A1",
                            "value": "Yes",
                            "attributes": [
                                "3506"
                            ]
                        },
                        {
                            "_id": "FI6.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FI7",
                    "order": 7,
                    "value": "Do you provide a sub-brand for your product?",
                    "type": "radio",
                    "pageId": "FI",
                    "answers": [
                        {
                            "_id": "FI7.A1",
                            "value": "Yes",
                            "attributes": [
                                "3546"
                            ]
                        },
                        {
                            "_id": "FI7.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FI",
            "name": "Product Identification& Classification",
            "order": "3"
        },
        {
            "questions": [
                {
                    "_id": "FP1",
                    "order": 1,
                    "value": "Is your product display ready or non-assembled packaged?",
                    "type": "radio",
                    "pageId": "FP",
                    "answers": [
                        {
                            "_id": "FP1.A1",
                            "value": "Yes",
                            "attributes": [
                                "149"
                            ]
                        },
                        {
                            "_id": "FP1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FP2",
                    "order": 2,
                    "value": "Does your product have returnable packaging?",
                    "type": "radio",
                    "pageId": "FP",
                    "answers": [
                        {
                            "_id": "FP2.A1",
                            "value": "Yes",
                            "attributes": [
                                "2261",
                                "2263",
                                "2308"
                            ]
                        },
                        {
                            "_id": "FP2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FP",
            "name": "Product Packaging",
            "order": "4"
        },
        {
            "questions": [
                {
                    "_id": "FL1",
                    "order": 1,
                    "value": "Is your product certified by an external organisation?",
                    "type": "radio",
                    "pageId": "FL",
                    "answers": [
                        {
                            "_id": "FL1.A1",
                            "value": "Yes",
                            "attributes": [
                                "685"
                            ]
                        },
                        {
                            "_id": "FL1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FL2",
                    "order": 2,
                    "value": "Do you communicate the global, national, local accreditation of your product to the buyer and/or consumer?",
                    "type": "radio",
                    "pageId": "FL",
                    "answers": [
                        {
                            "_id": "FL2.A1",
                            "value": "Yes",
                            "attributes": [
                                "2312"
                            ]
                        },
                        {
                            "_id": "FL2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FL3",
                    "order": 3,
                    "value": "Do you communicate to the buyer the regulation to which the product status is applicable and whether or not the buyer can sell or distribute the product?",
                    "type": "radio",
                    "pageId": "FL",
                    "answers": [
                        {
                            "_id": "FL3.A1",
                            "value": "Yes",
                            "attributes": [
                                "3070"
                            ]
                        },
                        {
                            "_id": "FL3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FL4",
                    "order": 4,
                    "value": "Does local regulation require you to provide information to the consumer and buyer on the type of material the product packaging is made of?",
                    "type": "radio",
                    "pageId": "FL",
                    "answers": [
                        {
                            "_id": "FL4.A1",
                            "value": "Yes",
                            "attributes": [
                                "2206"
                            ]
                        },
                        {
                            "_id": "FL4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FL5",
                    "order": 5,
                    "value": "Does your product label notify buyers and consumers about legal information?",
                    "type": "radio",
                    "pageId": "FL",
                    "answers": [
                        {
                            "_id": "FL5.A1",
                            "value": "Yes",
                            "attributes": [
                                "1457"
                            ]
                        },
                        {
                            "_id": "FL5.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FL",
            "name": "Legal, Regulatory & Certification",
            "order": "5"
        },
        {
            "questions": [
                {
                    "_id": "FS1",
                    "order": 1,
                    "value": "Do you provide instructions to the consumer on storing your product?",
                    "type": "radio",
                    "pageId": "FS",
                    "answers": [
                        {
                            "_id": "FS1.A1",
                            "value": "Yes",
                            "attributes": [
                                "789"
                            ]
                        },
                        {
                            "_id": "FS1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FS2",
                    "order": 2,
                    "value": "Do you provide instructions to the consumer on using the product?",
                    "type": "radio",
                    "pageId": "FS",
                    "answers": [
                        {
                            "_id": "FS2.A1",
                            "value": "Yes",
                            "attributes": [
                                "791"
                            ]
                        },
                        {
                            "_id": "FS2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FS3",
                    "order": 3,
                    "value": "Does your product label give the consumer instructions on how to prepare the product before serving?",
                    "type": "radio",
                    "pageId": "FS",
                    "answers": [
                        {
                            "_id": "FS3.A1",
                            "value": "Yes",
                            "attributes": [
                                "1377",
                                "1379"
                            ]
                        },
                        {
                            "_id": "FS3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FS4",
                    "order": 4,
                    "value": "Does your product label give the consumer a serving suggestion?",
                    "type": "radio",
                    "pageId": "FS",
                    "answers": [
                        {
                            "_id": "FS4.A1",
                            "value": "Yes",
                            "attributes": [
                                "1380"
                            ]
                        },
                        {
                            "_id": "FS4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FS5",
                    "order": 5,
                    "value": "Does your product indicate an age range for use?",
                    "type": "radio",
                    "pageId": "FS",
                    "answers": [
                        {
                            "_id": "FS5.A1",
                            "value": "Yes",
                            "attributes": [
                                "1558"
                            ]
                        },
                        {
                            "_id": "FS5.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FS",
            "name": "Storing, Handling & Usage",
            "order": "6"
        },
        {
            "questions": [
                {
                    "_id": "FN1",
                    "order": 1,
                    "value": "Does your packaging mention allergens on the label?",
                    "type": "radio",
                    "pageId": "FN",
                    "answers": [
                        {
                            "_id": "FN1.A1",
                            "value": "Yes",
                            "attributes": [
                                "373",
                                "375",
                                "376"
                            ]
                        },
                        {
                            "_id": "FN1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FN2",
                    "order": 2,
                    "value": "Do you know the dietary regime your product belongs to?",
                    "type": "radio",
                    "pageId": "FN",
                    "answers": [
                        {
                            "_id": "FN2.A1",
                            "value": "Yes",
                            "attributes": [
                                "1066"
                            ]
                        },
                        {
                            "_id": "FN2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FN3",
                    "order": 3,
                    "value": "Do you have an ingredient statement on your product label?",
                    "type": "radio",
                    "pageId": "FN",
                    "answers": [
                        {
                            "_id": "FN3.A1",
                            "value": "Yes",
                            "attributes": [
                                "1268"
                            ]
                        },
                        {
                            "_id": "FN3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FN4",
                    "order": 4,
                    "value": "Does your product label contain a food panel?",
                    "type": "radio",
                    "pageId": "FN",
                    "answers": [
                        {
                            "_id": "FN4.A1",
                            "value": "Yes",
                            "attributes": [
                                "1731",
                                "1732",
                                "1733",
                                "1734",
                                "1736",
                                "1364",
                                "1365"
                            ]
                        },
                        {
                            "_id": "FN4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FN",
            "name": "Ingredient & Nutritional Information",
            "order": "7"
        },
        {
            "questions": [
                {
                    "_id": "FCL1",
                    "order": 1,
                    "value": "Do you wish to mention the organic status of your product?",
                    "type": "radio",
                    "pageId": "FCL",
                    "answers": [
                        {
                            "_id": "FCL1.A1",
                            "value": "Yes",
                            "attributes": [
                                "1246",
                                "1248"
                            ]
                        },
                        {
                            "_id": "FCL1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FCL2",
                    "order": 2,
                    "value": "Do you wish to communicate the GMO status of your product?",
                    "type": "radio",
                    "pageId": "FCL",
                    "answers": [
                        {
                            "_id": "FCL2.A1",
                            "value": "Yes",
                            "attributes": [
                                "1258"
                            ]
                        },
                        {
                            "_id": "FCL2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FCL3",
                    "order": 3,
                    "value": "Do you make any health and/or nutritional claims about your product?",
                    "type": "radio",
                    "pageId": "FCL",
                    "answers": [
                        {
                            "_id": "FCL3.A1",
                            "value": "Yes",
                            "attributes": [
                                "1682",
                                "1709",
                                "1710"
                            ]
                        },
                        {
                            "_id": "FCL3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FCL",
            "name": "Claims",
            "order": "8"
        },
        {
            "questions": [
                {
                    "_id": "FPR1",
                    "order": 1,
                    "value": "Do you know when your product will no longer be available for ordering?",
                    "type": "radio",
                    "pageId": "FPR",
                    "answers": [
                        {
                            "_id": "FPR1.A1",
                            "value": "Yes",
                            "attributes": [
                                "1002"
                            ]
                        },
                        {
                            "_id": "FPR1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FPR2",
                    "order": 2,
                    "value": "Does your product package contain a date to allow consumers to make a decision (e.g. Best before, best if used by)?",
                    "type": "radio",
                    "pageId": "FPR",
                    "answers": [
                        {
                            "_id": "FPR2.A1",
                            "value": "Yes",
                            "attributes": [
                                "2334"
                            ]
                        },
                        {
                            "_id": "FPR2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FPR3",
                    "order": 3,
                    "value": "Do you wish to communicate the process through which your product has been grown, cultivated, reared and/or raised?",
                    "type": "radio",
                    "pageId": "FPR",
                    "answers": [
                        {
                            "_id": "FPR3.A1",
                            "value": "Yes",
                            "attributes": [
                                "1259"
                            ]
                        },
                        {
                            "_id": "FPR3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FPR4",
                    "order": 4,
                    "value": "Do you provide the buyer with information to ensure quality and inventory workflows/business processes?",
                    "type": "radio",
                    "pageId": "FPR",
                    "answers": [
                        {
                            "_id": "FPR4.A1",
                            "value": "Yes",
                            "attributes": [
                                "3703",
                                "3704"
                            ]
                        },
                        {
                            "_id": "FPR4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FPR5",
                    "order": 5,
                    "value": "Do you provide digital assets (e.g. images) to the buyer for your product?",
                    "type": "radio",
                    "pageId": "FPR",
                    "answers": [
                        {
                            "_id": "FPR5.A1",
                            "value": "Yes",
                            "attributes": [
                                "2989",
                                "2990",
                                "2995",
                                "2999",
                                "3000"
                            ]
                        },
                        {
                            "_id": "FPR5.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FPR",
            "name": "Process",
            "order": "9"
        },
        {
            "questions": [
                {
                    "_id": "FO1",
                    "order": 1,
                    "value": "Do you communicate the consumer key features or benefits of your product?",
                    "type": "radio",
                    "pageId": "FO",
                    "answers": [
                        {
                            "_id": "FO1.A1",
                            "value": "Yes",
                            "attributes": [
                                "1494",
                                " 2862",
                                "2864"
                            ]
                        },
                        {
                            "_id": "FO1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FO2",
                    "order": 2,
                    "value": "Do you wish to provide an optimisation for digital search engines, which may include online or in-store, for the consumer. Key words should be separated by commas with no spaces.",
                    "type": "radio",
                    "pageId": "FO",
                    "answers": [
                        {
                            "_id": "FO2.A1",
                            "value": "Yes",
                            "attributes": [
                                "1530"
                            ]
                        },
                        {
                            "_id": "FO2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FO3",
                    "order": 3,
                    "value": "Does your product have the retail price on it?",
                    "type": "radio",
                    "pageId": "FO",
                    "answers": [
                        {
                            "_id": "FO3.A1",
                            "value": "Yes",
                            "attributes": [
                                "2309"
                            ]
                        },
                        {
                            "_id": "FO3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FO4",
                    "order": 4,
                    "value": "Do you provide content information of your product?",
                    "type": "radio",
                    "pageId": "FO",
                    "answers": [
                        {
                            "_id": "FO4.A1",
                            "value": "Yes",
                            "attributes": [
                                "3733",
                                "3741",
                                "3775"
                            ]
                        },
                        {
                            "_id": "FO4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                },
                {
                    "_id": "FO5",
                    "order": 5,
                    "value": "Do you provide the consumer with information around the condition (e.g. thawed, frozen) of your product?",
                    "type": "radio",
                    "pageId": "FO",
                    "answers": [
                        {
                            "_id": "FO5.A1",
                            "value": "Yes",
                            "attributes": [
                                "3804",
                                "3820",
                                "3826",
                                "3830"
                            ]
                        },
                        {
                            "_id": "FO5.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ]
                }
            ],
            "id": "FO",
            "name": "Process",
            "order": "9"
        },
        {
            "questions": [
                {
                    "_id": "FRQ1",
                    "order": 1,
                    "value": "Does the product contain or is fruit juice?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ1.A1",
                            "value": "Yes",
                            "attributes": [
                                "1270"
                            ]
                        },
                        {
                            "_id": "FRQ1.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                  "derivedFrom": [
                      [
                          "FG1.A2"
                      ]
                  ],
                    
                },
                {
                    "_id": "FRQ2",
                    "order": 2,
                    "value": "Does the packaging of your product mention the maximum Number of smallest units per package?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ2.A1",
                            "value": "Yes",
                            "attributes": [
                                "1363"
                            ]
                        },
                        {
                            "_id": "FRQ2.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                  //   "derivedFrom": [
                  //       [
                  //           "FG1.A2"
                  //       ]
                  //   ]
                    "derivedFrom": [
                      [
                          "FG1.A2",
                          "FG2.A1",
                          "FC1.A1",
                      ],
                      [
                          "FG1.A1",
                          "FG3.A1"
                      ],
                      [
                          "FG1.A1",
                          "FG2.A6"
                      ]
                  ]
                },
                {
                    "_id": "FRQ3",
                    "order": 3,
                    "value": "Does the packaging of the product contain a lot and/or batch number?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ3.A1",
                            "value": "Yes",
                            "attributes": [
                                "2306"
                            ]
                        },
                        {
                            "_id": "FRQ3.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A2"
                        ]
                    ]
                },
                {
                    "_id": "FRQ4",
                    "order": 4,
                    "value": "Does the packaging of the product mention whether the product is or is not compliant to a regulation?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ4.A1",
                            "value": "Yes",
                            "attributes": [
                                "3074"
                            ]
                        },
                        {
                            "_id": "FRQ4.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A2"
                        ]
                    ]
                },
                {
                    "_id": "FRQ5",
                    "order": 5,
                    "value": "Do you provide the buyer with a marketing description focused on the brand of the product? (e.g. history of the brand)",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ5.A1",
                            "value": "Yes",
                            "attributes": [
                                "5891"
                            ]
                        },
                        {
                            "_id": "FRQ5.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A2"
                        ]
                    ]
                },
                {
                    "_id": "FRQ6",
                    "order": 6,
                    "value": "Does the packaging have special features?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ6.A1",
                            "value": "Yes",
                            "attributes": [
                                "2166"
                            ]
                        },
                        {
                            "_id": "FRQ6.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A1"
                        ]
                    ]
                },
                {
                    "_id": "FRQ7",
                    "order": 7,
                    "value": "Does the packaging provide an exact statement about the place of origin of the product?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ7.A1",
                            "value": "Yes",
                            "attributes": [
                                "2783"
                            ]
                        },
                        {
                            "_id": "FRQ7.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A1"
                        ]
                    ]
                },
                {
                    "_id": "FRQ8",
                    "order": 8,
                    "value": "Do you identify to the consumer the prescribed, regulated or generic name of the product?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ8.A1",
                            "value": "Yes",
                            "attributes": [
                                "3515"
                            ]
                        },
                        {
                            "_id": "FRQ8.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A1"
                        ]
                    ]
                },
                {
                    "_id": "FRQ9",
                    "order": 9,
                    "value": "Is the product is or does it contain dangerous goods?",
                    "type": "radio",
                    "pageId": "FRQ",
                    "answers": [
                        {
                            "_id": "FRQ9.A1",
                            "value": "Yes",
                            "attributes": [
                                "3865"
                            ]
                        },
                        {
                            "_id": "FRQ9.A2",
                            "value": "No",
                            "attributes": []
                        }
                    ],
                    "derivedFrom": [
                        [
                            "FG1.A1"
                        ]
                    ]
                }
            ],
            "id": "FRQ",
            "name": "Regional Questions",
            "order": "10"
        }
    ],
    "_id": "F",
    "name": "Food",
    "defaultAttrbiutes": [
      "40","56","57","58","60","66","67","83","85","112","144","161","1025","2186","2794","3508","3517","3541","3721","3725","3739","3777","3908"
    ],
    "derivedAttributes": [
        {
            "relation": [
                [
                    "FG1.A1",
                    "FG2.A4"
                ]
            ],
            "attributes": [
                "912",
                "914",
                "915",
                "916"
            ]
        },
        {
            "relation": [
                [
                    "FG1.A1",
                    "FG3.A1"
                ]
            ],
            "attributes": [
                "3761",
                "3762",
                "3764"
            ]
        },
        {
            "relation": [
                [
                    "FG1.A1",
                    "FN4.A1"
                ]
            ],
            "attributes": [
                "1714",
                "5872"
            ]
        },
        {
            "relation": [
                [
                    "FG1.A2",
                    "FG2.A1"
                ],
                [
                    "FG1.A1",
                    "FG2.A2"
                ],
                [
                    "FG1.A1",
                    "FG2.A6"
                ]
            ],
            "attributes": [
                "879",
                "880",
                "1272",
                "1273"
            ]
        },
        {
            "relation": [
                [
                    "FG1.A2",
                    "FG3.A1"
                ]
            ],
            "attributes": [
                "3759",
                "3761",
                "3762",
                "3764"
            ]
        },
        {
            "relation": [
                [
                    "FG1.A2",
                    "FN1.A1"
                ]
            ],
            "attributes": [
                "370"
            ]
        },
        {
            "relation": [
                [
                    "FG1.A2",
                    "FN4.A1"
                ]
            ],
            "attributes": [
                "1718",
                "1720"
            ]
        }
    ]
  };
  
    export default SampleData;