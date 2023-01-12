import React, { useState } from "react";
import SortableTree, { changeNodeAtPath, addNodeUnderParent, removeNodeAtPath } from "react-sortable-tree";
import "react-sortable-tree/style.css";



const DepartmentsSettings = ({ customSearchMethod, searchString, searchFocusIndex, searchFinishCallback, istreeData, settreeData, isMenuSub }) => {

  const getNodeKey = ({ treeIndex }) => treeIndex;

  return (
    <>
      <div className="n__card mt-0 sortable__container nestable__crad">
        <div className="n__body">
          <h3 className="">{isMenuSub} departments</h3>
          <span className="card_desc">Total: <strong>11 {isMenuSub} departments</strong></span>
          <div className="row">
            <div className="col-lg-12">
              <SortableTree
                treeData={istreeData}
                onChange={(istreeData) => settreeData(istreeData)}
                searchMethod={customSearchMethod}
                searchQuery={searchString}
                searchFocusOffset={searchFocusIndex}
                searchFinishCallback={searchFinishCallback}
                generateNodeProps={({ node, path }) => {
                  return {
                    title: (
                      <input
                        style={{ fontSize: "1.1rem" }}
                        value={node.name}
                        onChange={(event) => {
                          const name = event.target.value;
                          settreeData((state) =>
                            changeNodeAtPath({
                              treeData: istreeData,
                              path,
                              getNodeKey,
                              newNode: { ...node, name },
                            })
                          );
                        }}
                      />
                    ),
                    // subtitle: (
                    //   <div style={{ lineHeight: "2em" }}>{node.subtitle}</div>
                    // ),
                    buttons: [
                      <button
                        className="nestable_btn"
                        title="Add item"
                        onClick={() =>
                          settreeData(
                            (state) =>
                              addNodeUnderParent({
                                treeData: istreeData,
                                parentKey: path[path.length - 1],
                                expandParent: true,
                                getNodeKey,
                                newNode: {
                                  name: `${"New item"} ${path[path.length - 1]}`,
                                },
                                // addAsFirstChild: addAsFirstChild,
                              }).treeData
                          )
                        }
                      >
                        <span className="iconx-plus-square"></span>
                      </button>,
                      <button
                        className="nestable_btn"
                        title="Remove item"
                        onClick={() =>
                          settreeData((state) =>
                            removeNodeAtPath({
                              treeData: istreeData,
                              path,
                              getNodeKey,
                            })
                          )
                        }
                      >
                        <span className="iconx-minus-square"></span>
                      </button>,
                    ],
                  };
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentsSettings;
